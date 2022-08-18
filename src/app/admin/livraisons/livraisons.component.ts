import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../Services/http-client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.scss']
})
export class LivraisonsComponent implements OnInit
{
  constructor(private httpService : HttpClientService, private datePipe : DatePipe) { }

  dateActuelle : any = this.datePipe.transform(new Date(),'yyyy-MM-dd');
  mesLivraisons : any = [];
  searchText : any;
  filtrer : any;

  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(
      data =>
      {
        this.filtrer = data;
        this.filtrer.forEach((element : any) =>
        {
          if(element.etat === 'Livré')
          {
            this.mesLivraisons.push(element);
          }
        });
      })
  }

}
