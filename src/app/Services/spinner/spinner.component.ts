import {Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit
{
  isLoading !: boolean;

  constructor(private spinner : SpinnerService)
  {
    this.spinner.loading().subscribe
    (
      (param) => this.isLoading = param
    )
  }


  ngOnInit(): void
  {
  }

}
