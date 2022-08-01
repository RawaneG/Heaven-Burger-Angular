import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Observable } from 'rxjs';
import { Produit } from '../models/first-model.model';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.scss']
})
export class MonPanierComponent implements OnInit
{
  constructor(private cartService : CartService, private httpService: HttpClientService) { }
  itemPrix !: number;
  totalPrix !: number;
  items$ ?: Observable<any> = this.cartService.items$;
  mesZones !: any;
  removeProduct(param : any)
  {
    this.cartService.removeElement('produits',param);
  }
  amount(param : Produit, value:any)
  {
    this.cartService.amount(param, value);
  }
  plusTotal()
  {
    this.totalPrix = this.cartService.ajoutTotal();
    return this.totalPrix;
  }
  listerZone(event : Event)
  {
    const target = event.target as HTMLInputElement;
    if(target.value == 'livrer')
    {
      this.httpService.getUrl(this.httpService.zoneUrl).subscribe
      (
        (reponse) => this.mesZones = reponse
      );
    }
    else
    {
      this.mesZones = null;
    }
  }
  ngOnInit(): void
  {
    this.items$?.subscribe(value => value);
    this.plusTotal();
  }
}
