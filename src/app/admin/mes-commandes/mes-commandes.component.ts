import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent implements OnInit
{
  mesCommandes : any = [];
  constructor(private httpService: HttpClientService, private route : ActivatedRoute) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(data => this.mesCommandes = data);
  }
}
