import { Component, OnInit, Input } from '@angular/core';
import { Menu, Produit } from '../models/first-model.model';
import { CartService } from '../Services/cart.service';

@Component(
{
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit
{
  clicked : boolean = false;
  @Input() menu!: Menu;
  constructor(private cartService: CartService) { }
  ngOnInit(): void{}

  addToCart(product : any)
  {
    this.cartService.addToCart(product);
  }

}
