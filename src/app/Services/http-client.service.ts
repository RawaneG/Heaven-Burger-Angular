import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/first-model.model';

@Injectable(
{
    providedIn: 'root'
})
export class HttpClientService
{
  private burgerUrl = "https://127.0.0.1:8000/api/burgers";
  private menuUrl = "https://127.0.0.1:8000/api/menus";

  tabMenu !: Produit[];
  tabBurger !: Produit[];

  constructor(private http : HttpClient) { }

  getBurger() : Observable<any>
  {
    return this.http.get(this.burgerUrl);
  }
  getMenu() : Observable<any>
  {
    return this.http.get(this.menuUrl);
  }
  menuSubscribe()
  {
    this.getMenu().subscribe
    (
      value => {this.tabMenu = value}
    )
    return this.tabMenu;
  }
  burgerSubscribe()
  {
    this.getBurger().subscribe
    (
      value => {this.tabBurger = value}
    )
    return this.tabBurger;
  }
  getMenuById(id : number)
  {
    return this.menuSubscribe().find(param => param.id === id);
  }
  getBurgerById(id : number)
  {
    return this.burgerSubscribe().find(param => param.id === id);
  }
}
