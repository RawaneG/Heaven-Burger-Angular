import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mes-livraisons',
  templateUrl: './mes-livraisons.component.html',
  styleUrls: ['./mes-livraisons.component.scss']
})
export class MesLivraisonsComponent implements OnInit
{
  mesZones !: any;
  constructor(private httpService: HttpClientService, private route : ActivatedRoute) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.zoneUrl).subscribe(data => this.mesZones = data);
  }
}
