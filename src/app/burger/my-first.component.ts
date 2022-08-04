import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../models/first-model.model';
import { CartService } from '../Services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component(
{
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit
{
  @Input() burger!: Produit;
  ajoutee !: any;
  constructor(private sanitaire : DomSanitizer, private cartService: CartService) { }
  ngOnInit() {}
  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
  addToCart(product : Produit)
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
}
