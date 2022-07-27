import { Injectable } from "@angular/core";
import { Produit } from '../models/first-model.model';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class NoNameService
{
    getMenuById(id : number) : any
    {
      return this.mesMenus.find(param => param.id === id);
    }

    getAllMenus() : Produit[]
    {
      return this.mesBurgers;
    }

    getBurgerById(id : number) : any
    {

      console.log(this.mesBurgers.find(param => param.id === id));
    }

    getAllBurgers() : Produit[]
    {
      return this.mesBurgers;
    }

    mesBurgers : Produit[] =
    [
          {
            id : 1,
            nom : "cheese burger",
            prix : 2000 ,
            image : "https://burgerkingfrance.twic.pics/img/products/b/38/b38595ce-dfd5-4e28-bffc-2607cadd0ca8_?twic=v1/contain=250x250"
          },
          {
            id : 2,
            nom : "triple cheese",
            prix : 2500 ,
            image : "https://burgerkingfrance.twic.pics/img/products/1/dc/1dc2c4b2-3731-4ec2-8e70-02f259c7fe67_?twic=v1/contain=250x250"
          },
          {
            id : 3,
            nom : "cheese burger",
            prix : 2000 ,
            image : "https://burgerkingfrance.twic.pics/img/products/b/38/b38595ce-dfd5-4e28-bffc-2607cadd0ca8_?twic=v1/contain=250x250"
          },
          {
            id : 4,
            nom : "triple cheese",
            prix : 2500 ,
            image : "https://burgerkingfrance.twic.pics/img/products/1/dc/1dc2c4b2-3731-4ec2-8e70-02f259c7fe67_?twic=v1/contain=250x250"
          },
          {
            id : 1,
            nom : "cheese burger",
            prix : 2000 ,
            image : "https://burgerkingfrance.twic.pics/img/products/b/38/b38595ce-dfd5-4e28-bffc-2607cadd0ca8_?twic=v1/contain=250x250"
          },
          {
            id : 2,
            nom : "triple cheese",
            prix : 2500 ,
            image : "https://burgerkingfrance.twic.pics/img/products/1/dc/1dc2c4b2-3731-4ec2-8e70-02f259c7fe67_?twic=v1/contain=250x250"
          },
          {
            id : 3,
            nom : "cheese burger",
            prix : 2000 ,
            image : "https://burgerkingfrance.twic.pics/img/products/b/38/b38595ce-dfd5-4e28-bffc-2607cadd0ca8_?twic=v1/contain=250x250"
          },
          {
            id : 4,
            nom : "triple cheese",
            prix : 2500 ,
            image : "https://burgerkingfrance.twic.pics/img/products/1/dc/1dc2c4b2-3731-4ec2-8e70-02f259c7fe67_?twic=v1/contain=250x250"
          }
    ]
    mesMenus : Produit[] =
    [
      {
        id : 1,
        nom : "chicken wings",
        prix : 2500 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/826573b7-ada8-447f-9044-878a2aff7e70_?twic=v1/contain=250x250"
      },
      {
        id : 2,
        nom : "double whooper",
        prix : 2000 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/45e3ff53-c5ec-41f4-ab62-6e7b3b3eae96_?twic=v1/contain=250x250"
      },
      {
        id : 3,
        nom : "chicken wings",
        prix : 2500 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/826573b7-ada8-447f-9044-878a2aff7e70_?twic=v1/contain=250x250"
      },
      {
        id : 4,
        nom : "double whooper",
        prix : 2000 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/45e3ff53-c5ec-41f4-ab62-6e7b3b3eae96_?twic=v1/contain=250x250"
      },
      {
        id : 1,
        nom : "chicken wings",
        prix : 2500 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/826573b7-ada8-447f-9044-878a2aff7e70_?twic=v1/contain=250x250"
      },
      {
        id : 2,
        nom : "double whooper",
        prix : 2000 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/45e3ff53-c5ec-41f4-ab62-6e7b3b3eae96_?twic=v1/contain=250x250"
      },
      {
        id : 3,
        nom : "chicken wings",
        prix : 2500 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/826573b7-ada8-447f-9044-878a2aff7e70_?twic=v1/contain=250x250"
      },
      {
        id : 4,
        nom : "double whooper",
        prix : 2000 ,
        image : "https://burgerkingfrance.twic.pics/img/menu/45e3ff53-c5ec-41f4-ab62-6e7b3b3eae96_?twic=v1/contain=250x250"
      }
    ]
}
