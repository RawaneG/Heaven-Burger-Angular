import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Observable } from 'rxjs';
import { Produit } from '../models/first-model.model';
import { HttpClientService } from '../Services/http-client.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.scss']
})
export class MonPanierComponent implements OnInit
{
  constructor(private sanitaire : DomSanitizer, private cartService : CartService, private httpService: HttpClientService) { }
  myTab : any = [];
  produits : any;
  cachee : boolean = true;
  itemPrix !: number;
  totalPrix !: number;
  items$ ?: Observable<any> = this.cartService.items$;
  mesZones !: any;
  tabCommandes  : any = [];
  intermediaire : any = [];
  tabEntier : any = [];
  maZone = 0;
  body !: any;
  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
  getProducts()
  {
    this.cartService.items$.subscribe
    (
      reponse => this.tabCommandes = reponse
    );
    return this.tabCommandes;
  }
  getProduct()
  {
    this.cartService.items$.subscribe
    (
      reponse =>
      {
        this.tabCommandes = reponse;
        this.tabCommandes.forEach((element : any) =>
        {
          this.intermediaire =
          {
            "quantite" : element.quantite,
            "produit" :
            {
                "id" : element.id
            }
          }
          this.tabEntier.push(this.intermediaire);
        });
      }
    )
    return this.tabEntier;
  }

  commander()
  {
    this.body =
    {
      "client" :
      {
        "id" : 3
      },
      "produits": this.getProduct(),
      "zone" :
      {
        "id" : this.maZone
      }
    };
    this.httpService.postUrl(this.httpService.commandeUrl, this.body);
    this.cartService.removeAllElements('produits',this.cartService.items$);
    this.cartService.removeAllElements('boissons',this.cartService.item2$);
    location.reload();
  }

  removeProduct(param : any)
  {
    this.cartService.removeElement('produits',param);
    this.modePaiement();
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

  myZone(zone : any)
  {
    this.maZone = zone.id;
    console.log(this.maZone);
    return this.maZone;
  }

  modePaiement()
  {
    let somme = 0;
    let inputs = document.querySelectorAll('.zone');
    inputs.forEach((element : any) =>
    {
        this.myTab.push(element.checked)
    })
    this.myTab.forEach((element : any) =>
    {
      somme += element;
    });
    this.cartService.items$.subscribe
    (
      value => this.produits = value
    )
    if(this.produits.length > 0)
    {
      somme != 0 ? this.cachee = false : this.cachee = true;
    }
    else
    {
      this.cachee = true;
    }
    somme = 0;
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
      this.cartService.items$.subscribe
      (
        value => this.produits = value
      )
      if(this.produits.length > 0)
      {
        this.cachee = false;
        this.mesZones = null;
      }
      else
      {
        this.cachee = true;
      }
    }
  }

  ngOnInit(): void
  {
    this.items$?.subscribe(value => value);
    this.plusTotal();
  }
}
