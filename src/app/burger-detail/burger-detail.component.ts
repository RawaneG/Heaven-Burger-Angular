import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/first-model.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnInit {

  monBurger !: any;
  parameter !: number;

  constructor(private route : ActivatedRoute, private router : Router, private httpService : HttpClientService) {}

  ngOnInit(): void
  {
    this.parameter = +this.route.snapshot.params['id'];
    this.monBurger = this.httpService.getBurgerById(this.parameter);
    if(this.monBurger === undefined)
    {
      this.router.navigateByUrl('catalogue');
    }
  }
}
