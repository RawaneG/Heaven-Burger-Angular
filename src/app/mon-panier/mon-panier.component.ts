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

  body =
  {
    "client":
    {
        "id" : 3
    },
    "produits":
    [
      {
        "quantite": 5,
        "produit":
        {
            "id" : 40
        }
      }
    ],
    "zone":
    {
        "id" : 5
    }
  };
  // body =
  // {
  //   "produits": this.getProduct()
  // };
  // getProduct()
  // {
  //   this.cartService.items$.subscribe
  //   (
  //     reponse =>
  //     {
  //       this.tabCommandes = reponse;
  //       this.tabCommandes.forEach((element : any) =>
  //       {
  //         this.intermediaire =
  //         {
  //           "quantite" : element.quantite,
  //           "produit" :
  //           {
  //               "id" : element.id
  //           }
  //         }
  //         this.tabEntier.push(this.intermediaire);
  //         // this.tabEntier.push(element.zone);
  //       });
  //     }
  //   )
  //   return this.tabEntier;
  // }
  commander(param : any)
  {
    this.httpService.postUrl(this.httpService.commandeUrl, this.body);
    this.cartService.removeElement('produits',param);
    this.cartService.removeElement('boissons',param);
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
    console.log(somme);
    this.cartService.items$.subscribe
    (
      value => this.produits = value
    )
    if(this.produits.length > 0)
    {
      if(somme != 0)
      {
        this.cachee = false;
      }
      else
      {
        this.cachee = true;
      }
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
      this.mesZones = null;
    }
  }
  ngOnInit(): void
  {
    this.items$?.subscribe(value => value);
    this.plusTotal();
  }
}
