import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../Services/http-client.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnInit {

  monBurger !: any;
  parameter !: number;
  ajoutee !: any;


  constructor(private route : ActivatedRoute, private router : Router, private httpService : HttpClientService, private cartService: CartService) {}

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
          this.ajoutee = value.find(prod => prod.id === product.id);
          this.ajoutee.quantite++;
          this.cartService.saveEtat();
        }
      }
    );
  }

  ngOnInit(): void
  {
    this.parameter = +this.route.snapshot.params['id'];
    this.monBurger = this.httpService.getBurgerById(this.parameter);

    if(this.monBurger === undefined)
    {
      this.router.navigateByUrl('catalogue');
    }
  }
}
