import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  constructor(private router : Router, private cartService: CartService) { }
  items$ ?: Observable<any> = this.cartService.items$;

  onHome()
  {
    this.router.navigateByUrl('home');
  }
  ngOnInit(): void
  {
  }
}
