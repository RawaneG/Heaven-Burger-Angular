import { Component, OnInit, Input } from '@angular/core';
import { Menu, Produit } from '../models/first-model.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component(
{
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit
{
  clicked : boolean = false;
  @Input() menu!: Menu;
  constructor(private sanitaire : DomSanitizer) { }
  ngOnInit(): void{}
  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
}
