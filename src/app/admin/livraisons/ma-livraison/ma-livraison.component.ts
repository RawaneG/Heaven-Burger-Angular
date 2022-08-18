import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../../Services/http-client.service';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-ma-livraison',
  templateUrl: './ma-livraison.component.html',
  styleUrls: ['./ma-livraison.component.scss']
})
export class MaLivraisonComponent implements OnInit
{
  mesCommandes !: any;
  parametre !: any;

  constructor(private sanitaire : DomSanitizer, private route : ActivatedRoute, private router : Router, private httpService : HttpClientService, private cartService : CartService) { }
  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
        this.parametre = a.get('id');
      });
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(
      reponse =>
      {
        this.mesCommandes = reponse;
        this.mesCommandes = this.httpService.getElementById(+this.parametre, this.mesCommandes);
        console.log(this.mesCommandes);

      }
    )
  }

}
