import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../models/first-model.model';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit
{
  @Input() burger!: Produit;

  ngOnInit()
  {

  }
}
