import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  bsonChoisie : any[] = [];
  cachee : boolean = false;
  ajoutBoisson !: any;
  lesBoissons: any[] = [];
  monMenu !: any;
  parameter !: number;
  ajoutee !: any;
  @Input() mesBoissons !: any;

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpClientService, private cartService: CartService) { }
  listeBoisson(param: any)
  {
    this.cartService.item2$.subscribe
      (
        value =>
        {
          if (value.length === 0)
          {
            this.lesBoissons.push(param);
            this.cartService.addBansson(param);
          }
          else {
            this.lesBoissons = [];
            this.cartService.removeElement('boissons', value);
            this.lesBoissons.push(param);
            this.cartService.addBansson(param);
          }
        }
      )
  }
  laBansson(product : any)
  {
      if (!this.bsonChoisie.includes(product))
      {
        this.bsonChoisie.push(product);
        localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
        this.monMenu.Boissons[0].quantite--;
      }
      else
      {
        const index = this.bsonChoisie.indexOf(product);
        if (index > -1)
        {
          this.bsonChoisie.splice(index, 1);
          localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
          this.monMenu.Boissons[0].quantite++;
        }
      }
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
            this.bsonChoisie = [];
            localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
            this.cartService.addToCart(product);
          }
          else
          {
            this.ajoutee.quantite++;
            this.cartService.saveEtat('produits', this.cartService.items$);
          }
        }
      );
  }

  ngOnInit(): void {

    this.parameter = +this.route.snapshot.params['id'];
    this.monMenu = this.httpService.getElementById(this.parameter, this.httpService.menuUrl);
    if (this.monMenu === undefined)
    {
      this.router.navigateByUrl('catalogue');
    }
  }
}
