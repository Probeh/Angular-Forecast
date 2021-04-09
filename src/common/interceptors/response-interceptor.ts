import { Observable } from 'rxjs'
import { delay, tap } from 'rxjs/operators'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApplicationService } from '@services/application.service'
import { RequestCacheService } from '@services/request-cache.service'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private application: ApplicationService, private cache: RequestCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        delay(2000),
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.cache.put(req, event);
            this.application.loadingChange$.next(false);
          }
        })
      );
  }
}