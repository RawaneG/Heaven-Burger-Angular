import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
{
    providedIn: 'root'
})
export class HttpClientService
{
  private burgerUrl = "https://127.0.0.1:8000/api/burgers";
  private menuUrl = "https://127.0.0.1:8000/api/menus";

  constructor(private http : HttpClient) { }

  getBurger() : Observable<any>
  {
    return this.http.get(this.burgerUrl);
  }
  getMenu() : Observable<any>
  {
    return this.http.get(this.menuUrl);
  }
  getMenuById(id : number)
  {
    return this.getMenu().subscribe
    (
      value => {value.find((param : any) => param.id === id)}
    )
  }
  getBurgerById(id : number)
  {
    return this.getBurger().subscribe
    (
      value => {value.find((param : any) => param.id === id)}
    )
  }
}
