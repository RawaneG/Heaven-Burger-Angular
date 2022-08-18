import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from "rxjs/operators";
import { SpinnerService } from './spinner/spinner.service';
import { DatePipe } from '@angular/common';

@Injectable(
{
    providedIn: 'root'
})
export class HttpClientService
{
  burgerUrl = "https://127.0.0.1:8000/api/burgers";
  menuUrl = "https://127.0.0.1:8000/api/menus";
  boissonsUrl = "https://127.0.0.1:8000/api/boissons";
  zoneUrl = "https://127.0.0.1:8000/api/zones";
  commandeUrl = "https://127.0.0.1:8000/api/commandes";
  commandeId = "https://127.0.0.1:8000/api/commandes/";
  livreurUrl = "https://127.0.0.1:8000/api/livreurs";
  livraisonUrl = "https://127.0.0.1:8000/api/livraisons";

  tab !: any[];

  constructor(private http : HttpClient, private spinner : SpinnerService) {}

/**************************************** Récupération des Observables ******** **************************/
  putUrl(url : any, body : any)
  {
    this.http.put(url, body).subscribe();
  }
/**************************************** Récupération des Observables ******** **************************/
  postUrl(url : any, body : any)
  {
    this.http.post(url, body).subscribe();
  }
/**************************************** Récupération des Observables ******** **************************/
  getUrl(url : any) : Observable<any>
  {
    return this.http.get<any[]>(url);
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
  getElementById(id : number, tableau : any)
  {
    return tableau.find((param : any) => param.id === id);
  }
}
