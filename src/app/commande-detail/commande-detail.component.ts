import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.scss']
})
export class CommandeDetailComponent implements OnInit
{
  mesCommandes !: any;
  parametre !: number;

  body =
    {
      "etat": "Annulé"
    };
  supprimer()
  {
    this.httpService.putUrl(this.httpService.commandeUrl + '/' + this.mesCommandes.id, this.body)
  }

  constructor(private sanitaire : DomSanitizer, private route : ActivatedRoute, private router : Router, private httpService : HttpClientService, private cartService : CartService) { }

  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }

  ngOnInit(): void
  {
    this.parametre = +this.route.snapshot.params['id'];
    this.mesCommandes = this.httpService.getElementById(this.parametre, this.httpService.commandeUrl);
  }

}
