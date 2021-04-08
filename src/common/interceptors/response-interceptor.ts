import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}