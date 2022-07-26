import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/first-model.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {

  @Input() menu!: Produit;

  constructor() { }

  ngOnInit(): void
  {

  }

}
