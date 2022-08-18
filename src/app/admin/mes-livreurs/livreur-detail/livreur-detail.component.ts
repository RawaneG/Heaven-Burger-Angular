import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livreur-detail',
  templateUrl: './livreur-detail.component.html',
  styleUrls: ['./livreur-detail.component.scss']
})
export class LivreurDetailComponent implements OnInit {
  parameter: any;
  monLivreur: any;
  body !: {};
  constructor(private httpService: HttpClientService, private route : ActivatedRoute) { }
  dispo(param : any)
  {
    this.body =
    {
      "etat" : "disponible"
    }
    this.httpService.putUrl(this.httpService.livreurUrl + "/" + param, this.body);
    setTimeout(() =>
    {
      location.reload();
    }, 1000);
  }
  changeState(param : string, id : any)
  {
    if(param === 'finaliser')
    {
      this.body =
      {
        "etat" : "Livré"
      }
    }
    else
    {
      this.body =
      {
        "etat" : "Annulé"
      }
    }
    this.httpService.putUrl(this.httpService.commandeId + id.id, this.body);
    setTimeout(() =>
    {
      location.reload();
    }, 1000);
  }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
      this.parameter = a.get('id');
      });
    this.httpService.getUrl(this.httpService.livreurUrl).subscribe(
      (reponse) =>
      {
        this.monLivreur = reponse
        this.monLivreur = this.httpService.getElementById(+this.parameter, this.monLivreur);
      });

  }

}
