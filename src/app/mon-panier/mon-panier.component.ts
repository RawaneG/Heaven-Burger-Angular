import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Observable } from 'rxjs';
import { Produit } from '../models/first-model.model';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.scss']
})
export class MonPanierComponent implements OnInit
{
  constructor(private cartService : CartService) { }

  itemPrix !: number;
  totalPrix !: number;
  items$ ?: Observable<any> = this.cartService.items$;

  removeProduct(param : any)
  {
    this.cartService.removeElement(param);
  }

  amount(param : Produit, value:any)
  {
    this.cartService.amount(param, value);
  }

  plusTotal()
  {
    this.totalPrix = this.cartService.ajoutTotal();
    return this.totalPrix;
  }

  ngOnInit(): void
  {
    this.items$?.subscribe(value => value);
    this.plusTotal();
  }

}
