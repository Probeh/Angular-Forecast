import { Observable, of } from 'rxjs'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { providers } from '@env/environment'
import { Encoding } from '@helpers/encoding'
import { RequestCache } from '@services/request-cache.service'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.url.includes(providers.weather.baseUrl)
      ? req.clone({
        responseType: 'json',
        params: req.params.append('apikey', Encoding.decodeBase64(providers.weather.apiKey))
      }) : req;
    const cachedResponse = this.cache.get(req);

    return cachedResponse
      ? of(cachedResponse) : next.handle(req);
  }
}
