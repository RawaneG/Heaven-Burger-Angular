import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit
{
  @Input() maZone : any;

  constructor() { }

  ngOnInit(): void
  {

  }

}
