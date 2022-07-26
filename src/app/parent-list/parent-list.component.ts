import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';
import { Observable } from 'rxjs';
import { Produit } from '../models/first-model.model';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit
{
  mesBurgers !: Produit[];
  mesMenus !: Produit[];

  constructor(private httpService : HttpClientService) {}

  ngOnInit(): void
  {
    this.httpService.getBurger().subscribe
    (
      (reponse) => {this.mesBurgers = reponse}
    );
    this.httpService.getMenu().subscribe
    (
      (reponse) => {this.mesMenus = reponse}
    );
  }
}
