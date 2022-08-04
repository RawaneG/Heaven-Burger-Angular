import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent implements OnInit
{
  mesCommandes : any = [];
  constructor(private httpService: HttpClientService) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(data => this.mesCommandes = data);
  }
}
