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

  monBurger !: any;
  parameter !: number;
  ajoutee !: any;

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

  ngOnInit(): void
  {
    this.parameter = +this.route.snapshot.params['id'];
    this.monBurger = this.httpService.getElementById(this.parameter, this.httpService.burgerUrl);

    if(this.monBurger === undefined)
    {
      this.router.navigateByUrl('catalogue');
    }
  }
}
