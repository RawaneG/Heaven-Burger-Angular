import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    searchText: any;
    mesCommandes : any = [];

  constructor(private httpService: HttpClientService,private route : ActivatedRoute) { }

  body =
    {
      "etat": "Livré"
    };
  valider(commande : any)
  {
    this.httpService.putUrl(this.httpService.commandeUrl + '/' + commande, this.body);
    location.reload();
  }

  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(data => this.mesCommandes = data);
  }

}
