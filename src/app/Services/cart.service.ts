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
  /*
    * Ajouter au Panier
  */
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
  transitionTab()
  {
    this.items$.subscribe(valeur =>
      {
         this.tableau = valeur
      })
    return this.tableau;
  }
  /*
    * Sauvegarde automatique dans le LocalStorage
  */
  saveEtat() : void
  {
    localStorage.setItem('produits', JSON.stringify(this.transitionTab()))
  }
  /*
    * Suppression d'un Produit du Panier
  */
  removeElement(parametre : any)
  {
    this.objet = this.transitionTab().find(valeur => valeur.id === parametre.id)
    this.transitionTab().splice(this.objet, 1);
    this.saveEtat();
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
    this.saveEtat();
    return total;
  }
}