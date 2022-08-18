import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../Services/http-client.service';
import { CartService } from '../Services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnInit {
  quantiteActuelle = 0;
  beureukh : number = 0;
  monBurger : any = [];
  parameter !: any;
  ajoutee !: any;
  mesBoissons : any;
  constructor(private sanitaire : DomSanitizer, private route : ActivatedRoute, private router : Router, private httpService : HttpClientService, private cartService: CartService) {}

  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }

  addToCart(product : any)
  {
    this.cartService.items$.subscribe
    (
      value =>
      {
        this.ajoutee = value.find(prod => prod.id === product.id);
        if (this.ajoutee === undefined)
        {
          this.cartService.addToCart(product);
        }
        else
        {
          this.ajoutee.quantite++;
          this.cartService.saveEtat('produits',this.cartService.items$);
        }
      }
    );
  }
  incremente(product : any)
  {
    this.beureukh++;
    let input = document.querySelectorAll('.span');
    input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
    this.quantiteActuelle = 0;
  }

  decremente(product : any)
  {
    if(this.beureukh > 0)
    {
      this.beureukh--;
      let input = document.querySelectorAll('.span');
      input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
      this.quantiteActuelle = 0;
    }
    else
    {
      return;
    }
  }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
      this.parameter = a.get('id');
      });
    this.httpService.getUrl(this.httpService.burgerUrl).subscribe(
      (reponse) =>
      {
        this.monBurger = reponse
        this.monBurger = this.httpService.getElementById(+this.parameter, this.monBurger);
      });
    this.httpService.getUrl(this.httpService.boissonsUrl).subscribe((reponse) =>
      {
        this.mesBoissons = reponse
      });
  }
}
