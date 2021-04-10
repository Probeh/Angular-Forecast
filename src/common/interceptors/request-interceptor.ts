import { Observable, of } from 'rxjs'
import { delay, tap } from 'rxjs/operators'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { providers } from '@env/environment'
import { decodeBase64 } from '@helpers/formatters'
import { ApplicationService } from '@services/application.service'
import { RequestCache } from '@services/cache.service'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private application: ApplicationService, private cache: RequestCache) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.application.$isLoadingChange.next(true);
    req = req.url.includes(providers.weather.baseUrl)
      ? req.clone({
        params: req.params.append('apikey', decodeBase64(providers.weather.apiKey))
      }) : req;
    const cachedResponse = this.cache.get(req);
    return (!cachedResponse ? next.handle(req) : of(cachedResponse))
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.cache.put(req, event);
            this.application.$isLoadingChange.next(false);
          }
        })
      );
  }
}
