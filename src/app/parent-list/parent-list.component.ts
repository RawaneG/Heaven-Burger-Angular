import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';
import { Menu, Produit } from '../models/first-model.model';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit
{
  mesBurgers !: Produit[];
  mesMenus !: Menu[];

  constructor(private httpService : HttpClientService) {}

  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.burgerUrl).subscribe
    (
      (reponse) => {this.mesBurgers = reponse}
    );
    this.httpService.getUrl(this.httpService.menuUrl).subscribe
    (
      (reponse) => {this.mesMenus = reponse}
    );
  }
}
