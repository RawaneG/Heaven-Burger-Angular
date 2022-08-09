import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    searchText: any;
    mesCommandes : any = [];

  constructor(private httpService: HttpClientService) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.commandeUrl).subscribe(data => this.mesCommandes = data);
  }

}
