import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientService } from './Services/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  burger !: any;
  menu !: any;

  constructor(private httpService : HttpClientService)
  {

  }
  ngOnInit(): void
  {

  }
}
