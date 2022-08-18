import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService
{
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() {}

  show()
  {
    this.isLoading.next(true);
  }
  hide()
  {
    this.isLoading.next(false);
  }

  loading()
  {
    return this.isLoading.asObservable();
  }
}
