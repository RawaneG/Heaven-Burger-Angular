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
  maQuantiteTotale !: number;
  autreMenus !: any;
  menuSuggestions !: any;
  qteTotal = 0;
  somme !: number;
  quantite : any[]= [];
  bsonChoisie : any[] = [];
  cachee : boolean = true;
  monMenu : any = [];
  parameter !: any;
  ajoutee !: any;
  @Input() mesBoissons !: any;

  message(event : any)
  {
    this.maQuantiteTotale = event;
  }
  constructor( private sanitaire : DomSanitizer, private route: ActivatedRoute, private router: Router, private httpService: HttpClientService, private cartService: CartService) { }

  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
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
            product.Boissons = this.bsonChoisie;
            this.cartService.addToCart(product);
            this.bsonChoisie = [];
            localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
          }
          else
          {
            this.ajoutee.quantite++;
            this.cartService.saveEtat('produits',this.cartService.items$);
          }
        }
      );
  }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
        this.parameter = a.get('id')
      });
    this.httpService.getUrl(this.httpService.menuUrl).subscribe(
        (reponse) =>
        {
          this.monMenu = reponse;
          this.autreMenus = reponse;
          this.monMenu = this.httpService.getElementById(+this.parameter, this.monMenu);
          this.monMenu.Boissons.forEach((element : any) =>
          {
            this.qteTotal += element.quantite;
          });
          this.somme = this.qteTotal;
        });
  }
}
