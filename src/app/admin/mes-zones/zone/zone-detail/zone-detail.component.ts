import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../../../../Services/http-client.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent implements OnInit
{
  parameter : any;
  maZone : any;

  constructor(private route : ActivatedRoute,private httpService : HttpClientService) { }

  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
        this.parameter = a.get('id');
        this.maZone = this.httpService.getElementById(+this.parameter, this.httpService.zoneUrl);
        console.log(this.maZone);
      });

  }

}
