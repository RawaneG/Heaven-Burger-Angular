import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from './spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor
{
  reqEnAttente = 0;
  handleHideLoading()
  {
    this.reqEnAttente = this.reqEnAttente--;
    if(this.reqEnAttente === 0)
    {
      this.spinner.hide();
    }
  }
  constructor(private spinner : SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    this.spinner.show();
    this.reqEnAttente = this.reqEnAttente++;

    return next.handle(req).pipe
    (
      tap(
        {
          next:(event) =>
          {
            if(event.type === HttpEventType.Response)
            {
              setTimeout(() => {
                this.handleHideLoading();
              }, 2000);
            }
          },
          error: (_) =>
          {
              this.handleHideLoading();
          }
        }
      )
    );
  }

}

export const HttpInterceptProvider =
{
  provide : HTTP_INTERCEPTORS,
  useClass : HttpInterceptorService,
  multi : true
}