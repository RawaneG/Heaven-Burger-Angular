import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  monMenu !: any;
  parameter !: number;

  constructor(private route : ActivatedRoute, private router : Router, private httpService : HttpClientService) {}

  ngOnInit(): void
  {
      this.parameter = +this.route.snapshot.params['id'];
      this.monMenu = this.httpService.getMenuById(this.parameter);
      if(this.monMenu === undefined)
      {
        this.router.navigateByUrl('catalogue');
      }
  }
}
