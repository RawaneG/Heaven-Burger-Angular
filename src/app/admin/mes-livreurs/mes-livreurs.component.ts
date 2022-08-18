import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../Services/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mes-livreurs',
  templateUrl: './mes-livreurs.component.html',
  styleUrls: ['./mes-livreurs.component.scss']
})
export class MesLivreursComponent implements OnInit {

  mesLivreurs !: any;
  constructor(private httpService: HttpClientService, private route : ActivatedRoute) { }
  ngOnInit(): void
  {
    this.httpService.getUrl(this.httpService.livreurUrl).subscribe(data => this.mesLivreurs = data);
  }

}
