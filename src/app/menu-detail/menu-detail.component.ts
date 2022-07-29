import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  monMenu !: any;
  parameter !: number;
  ajoutee !: any;


  constructor(private route : ActivatedRoute, private router : Router, private httpService : HttpClientService, private cartService : CartService) {}

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
      this.monMenu = this.httpService.getMenuById(this.parameter);
      if(this.monMenu === undefined)
      {
        this.router.navigateByUrl('catalogue');
      }
  }
}
