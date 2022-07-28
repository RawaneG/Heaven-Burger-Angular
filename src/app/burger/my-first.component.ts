import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../models/first-model.model';
import { CartService } from '../Services/cart.service';

@Component(
{
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit
{
  clicked : boolean = false;
  @Input() burger!: Produit;
  constructor(private cartService: CartService) { }
  ngOnInit() {}
  addToCart(product : any)
  {
    this.cartService.addToCart(product);
  }
}
