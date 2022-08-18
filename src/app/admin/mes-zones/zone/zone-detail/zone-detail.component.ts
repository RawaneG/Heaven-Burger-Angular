import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../../../Services/http-client.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent implements OnInit
{
  hide = true;
  checked = false;
  parameter : any;
  maZone : any;
  mesLivreurs : any;
  leLivreur : any = [];
  lesCommandes : any = [];
  tableauInter = {};
  tableauFinal : any = [];
  modifier =
  {
    "etat" : "indisponible"
  }

  constructor(private route : ActivatedRoute,private httpService : HttpClientService, private router : Router) { }

  getCommandes()
  {
    this.lesCommandes.forEach((element : any) =>
    {
      this.tableauInter =
      {
        "id" : element.id
      }
      this.tableauFinal.push(this.tableauInter);
    });
    return this.tableauFinal;
  }

  getLivraison()
  {
    const body =
    {
      "zone":
      {
          "id" : this.maZone.id
      },
      "commandes": this.getCommandes()
      ,
        "livreur":
        {
            "id" : this.leLivreur.id
        }
    };

    this.httpService.putUrl(this.httpService.livreurUrl + "/" + this.leLivreur.id, this.modifier);
    this.httpService.postUrl(this.httpService.livraisonUrl, body);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  monLivreur(livreur : any)
  {
    if(this.lesCommandes === [])
    {
      this.hide = true;
      this.leLivreur = livreur;
    }
    else
    {
      this.hide = false;
      this.leLivreur = livreur;
      this.checked = true;
    }
  }

  mesCommandes(commande : any)
  {
    if(this.lesCommandes.includes(commande))
    {
      const index = this.lesCommandes.indexOf(commande);
      if (index > -1)
      {
        this.lesCommandes.splice(index, 1);
      }
    }
    else
    {
      this.lesCommandes.push(commande);
      if(this.checked == true)
      {
        this.hide = false;
      }
      else
      {
        this.hide = true;
      }
    }
  }

  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a => { this.parameter = a.get('id')});
    this.httpService.getUrl(this.httpService.zoneUrl).subscribe(
      (reponse) =>
      {
        this.maZone = reponse
        this.maZone = this.httpService.getElementById(+this.parameter, this.maZone);
      });
    this.httpService.getUrl(this.httpService.livreurUrl).subscribe
    (
      param => this.mesLivreurs = param
    );
  }

}
