import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent implements OnInit
{
  dateActuelle : any = this.datePipe.transform(new Date(),'yyyy-MM-dd');
  searchText: any;
  mesCommandes : any = [];
  filtrer: any = [];
  constructor(private httpService: HttpClientService, private route : ActivatedRoute, private datePipe : DatePipe) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(
      data =>
      {
        this.filtrer = data;
        this.filtrer.forEach((element : any) =>
        {
          if(element.etat === 'Livré' || element.etat === 'En Cours')
          {
            this.mesCommandes.push(element);
          }
        });
      }
      );
  }
}
