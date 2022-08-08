import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable} from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Boisson, Produit, Menu } from '../models/first-model.model';

@Injectable(
{
    providedIn: 'root',
})
export class CartService
{
  _itemsSubject = new BehaviorSubject<Produit[]>([]);
  _items1Subject = new BehaviorSubject<Boisson[]>([]);
  items$ = this._itemsSubject.asObservable();
  item2$ = this._items1Subject.asObservable();
  tableau !: Produit[];
  objet !: any;

  constructor()
  {
    let existingCartItems = JSON.parse(localStorage.getItem('produits') || '[]');
    if (!existingCartItems)
    {
      existingCartItems = [];
    }
    this._itemsSubject.next(existingCartItems);
  }
  /*
    * Suppression de tous les produits
  */
 removeAllElements(title : string, observable : any)
 {
  observable.pipe(
    take(1),
    map((productsParam) =>
    {
      if(title == 'produits')
      {
        productsParam = [];
        localStorage.setItem('produits', JSON.stringify(productsParam));
      }
      else
      {
        productsParam = [];
        localStorage.setItem('boissons', JSON.stringify(productsParam));
      }
    }),
  ).subscribe();
 }
  addBansson(banssonParam: Boisson)
  {
    this.item2$.pipe(
      take(1),
      map((productsParam) =>
      {
        productsParam.push(banssonParam);
        localStorage.setItem('boissons', JSON.stringify(productsParam));
      }),
    ).subscribe();
  }
  addToCart(productParam: Produit)
  {
    this.items$.pipe(
      take(1),
      map((productsParam) =>
      {
        productParam.quantite = 1;
        productsParam.push(productParam);
        localStorage.setItem('produits', JSON.stringify(productsParam));
      }),
    ).subscribe();
  }
  /*
    * Transformation de L'observable en Tableau
  */
  transitionTab(observable : Observable<any>)
  {
    observable.subscribe(valeur =>
      {
         this.tableau = valeur
      })
    return this.tableau;
  }
  /*
    * Sauvegarde automatique dans le LocalStorage
  */
  saveEtat(title : string, observable : Observable<any>) : void
  {
    localStorage.setItem(title , JSON.stringify(this.transitionTab(observable)))
  }
  /*
    * Suppression d'un Produit du Panier
  */
  removeElement(title : string, parametre : any, )
  {
    if(title == 'produits')
    {
      this.objet = this.transitionTab(this.items$).find(valeur => valeur.id === parametre.id)
      this.transitionTab(this.items$).splice(this.objet, 1);
      this.saveEtat('produits',this.items$);
    }
    else
    {
      this.objet = this.transitionTab(this.item2$).find(valeur => valeur.id === parametre.id)
      this.transitionTab(this.item2$).splice(this.objet, 1);
      this.saveEtat('boissons',this.item2$);
    }
  }
  /*
    * Update de l'attribut quantité dans le localStorage
  */
   amount(param : Produit, value : any)
  {
    this.items$.pipe(
      take(1),
      map((productsParam) =>
      {
        productsParam.forEach(element =>
        {
          if(element.id == param.id)
          {
            element!.quantite = value;
          }
        })
        localStorage.setItem('produits', JSON.stringify(productsParam));
      }),
    ).subscribe();
  }
  /*
    * Incrémentation du Prix total
  */
  ajoutTotal()
  {
    let total = 0;
    this.items$.subscribe(
    valeur => valeur.forEach(element => total += element.quantite * element.prix)
    );
    this.saveEtat('produits',this.items$);
    return total;
  }
}