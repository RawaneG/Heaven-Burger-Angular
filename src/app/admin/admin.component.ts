import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit
{
    dateActuelle : any = this.datePipe.transform(new Date(),'yyyy-MM-dd');
    searchText: any;
    filtrer : any = [];
    mesCommandes : any = [];

  constructor(private httpService: HttpClientService,private route : ActivatedRoute, private datePipe : DatePipe) { }

  body =
  {
      "etat": "Livré"
  };
  valider(commande : any)
  {
    this.httpService.putUrl(this.httpService.commandeUrl + '/' + commande, this.body);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe
    (
      data =>
      {
        this.mesCommandes = data;
      }
    );
  }

}
