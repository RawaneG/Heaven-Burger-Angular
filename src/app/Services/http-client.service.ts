import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
{
    providedIn: 'root'
})
export class HttpClientService
{
  burgerUrl = "https://127.0.0.1:8000/api/burgers";
  menuUrl = "https://127.0.0.1:8000/api/menus";
  boissonsUrl = "https://127.0.0.1:8000/api/boissons";
  zoneUrl = "http://127.0.0.1:8000/api/zones";
  commandeUrl = "https://127.0.0.1:8000/api/commandes";
  commandeId = "https://127.0.0.1:8000/api/commandes/";

  tab !: any[];
  constructor(private http : HttpClient) {}

  putUrl(url : any, body : any)
  {
    this.http.put(url, body).subscribe();
  }
  postUrl(url : any, body : any)
  {
    this.http.post(url, body).subscribe();
  }
/**************************************** Récupération des Observables ******** **************************/
  getUrl(url : any) : Observable<any>
  {
    return this.http.get(url);
  }
/**************************************** Transition Observable en tableau *****************************/
  obsToTab(observable : any)
  {
    this.getUrl(observable).subscribe
    (
      value => {this.tab = value}
    )
    return this.tab;
  }
/**************************************** Recherche d'un produit par Id ****** **************************/
  getElementById(id : number, observable : any)
  {
    return this.obsToTab(observable).find(param => param.id === id);
  }
}
