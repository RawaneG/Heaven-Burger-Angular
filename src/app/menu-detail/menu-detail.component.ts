import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit
{
  compteur : number = 0;
  sommeTotal : number = 0;
  somme : number = 0;
  quantite : any[]= [];
  bsonChoisie : any[] = [];
  cachee : boolean = true;
  ajoutBoisson !: any;
  lesBoissons: any[] = [];
  monMenu !: any;
  parameter !: number;
  ajoutee !: any;
  @Input() mesBoissons !: any;

  constructor( private sanitaire : DomSanitizer, private route: ActivatedRoute, private router: Router, private httpService: HttpClientService, private cartService: CartService) { }

  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
  sommeQuantite()
  {
    let qteTotal = 0;
    this.parameter = +this.route.snapshot.params['id'];
    this.monMenu = this.httpService.getElementById(this.parameter, this.httpService.menuUrl);
    this.monMenu.Boissons.forEach((element : any) =>
    {
      qteTotal += element.quantite;
    });
    return qteTotal;
  }

  enEntree()
  {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(element => this.quantite.push((+element.value)));
    this.quantite.forEach
    (
      element =>
      {
          this.somme += element;
          this.sommeTotal = this.somme;
      }
    )
    this.quantite = [];
    if (this.sommeTotal == this.sommeQuantite())
    {
      console.log("somme total : " + this.sommeTotal + " quantite total : " + this.sommeQuantite());
      this.cachee = false;
    }
    else
    {
      console.log("somme total : " + this.sommeTotal + " quantite total : " + this.sommeQuantite());
      this.cachee = true;
    }
    this.somme = 0;
  }

  ajout(operation : boolean, value : any)
  {
    if(operation === true)
    {
      this.compteur = +(value.value++);
    }
    else
    {
      this.compteur = +(value.value--);
    }
    let inputs = document.querySelectorAll('input');
    inputs.forEach(element => this.quantite.push((+element.value)));
    this.quantite.forEach
    (
      element =>
      {
          this.somme += element;
          this.sommeTotal = this.somme;
      }
    )
    if (this.sommeTotal == this.sommeQuantite())
    {
      console.log("somme total : " + this.sommeTotal + " quantite total : " + this.sommeQuantite());
      this.cachee = false;
    }
    else
    {
      console.log("somme total : " + this.sommeTotal + " quantite total : " + this.sommeQuantite());
      this.cachee = true;
    }
    this.quantite = [];
  }

  addToCart(product: any)
  {
    this.cartService.items$.subscribe
      (
        value =>
        {
          this.ajoutee = value.find(prod => prod.id === product.id);
          if (this.ajoutee === undefined)
          {
            this.cartService.addToCart(product);
            product.Boissons = this.bsonChoisie;
            this.bsonChoisie = [];
            localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
          }
          else
          {
            this.ajoutee.quantite++;
            this.cartService.saveEtat('produits', this.cartService.items$);
          }
        }
      );
  }

  ngOnInit(): void
  {

    this.parameter = +this.route.snapshot.params['id'];
    this.monMenu = this.httpService.getElementById(this.parameter, this.httpService.menuUrl);

    if (this.monMenu === undefined)
    {
      this.router.navigateByUrl('catalogue');
    }
  }
}
