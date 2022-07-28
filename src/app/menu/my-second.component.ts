import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/first-model.model';
import { CartService } from '../Services/cart.service';

@Component(
{
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {
  clicked : boolean = false;
  @Input() menu!: Produit;
  constructor(private cartService: CartService) { }
  ngOnInit(): void{}

  addToCart(product : any)
  {
    this.cartService.addToCart(product);
  }

}
