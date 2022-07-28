import { BehaviorSubject } from 'rxjs';
import { Injectable} from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Produit } from '../models/first-model.model';

@Injectable(
{
    providedIn: 'root',
})
export class CartService
{
  _itemsSubject = new BehaviorSubject<Produit[]>([]);
  items$ = this._itemsSubject.asObservable();
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

  transitionTab()
  {
    this.items$.subscribe(valeur =>
      {
         this.tableau = valeur
      })
    return this.tableau;
  }

  saveEtat() : void
  {
    localStorage.setItem('produits', JSON.stringify(this.transitionTab()))
  }

  removeElement(parametre : any)
  {
    this.objet = this.transitionTab().find(valeur => valeur.id === parametre.id)
    this.transitionTab().splice(this.objet, 1);
    this.saveEtat();
  }

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

  ajoutTotal()
  {
    let total = 0;
    this.items$.subscribe(
    valeur => valeur.forEach(element => total += element.quantite * element.prix)
    );
    this.saveEtat();
    return total;
  }
}