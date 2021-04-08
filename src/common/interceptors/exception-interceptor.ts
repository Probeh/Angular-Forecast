import { MessageService } from 'primeng/api'
import { Observable } from 'rxjs'
import { catchError, retry, tap } from 'rxjs/operators'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { providers } from '@env/environment'
import { decodeBase64 } from '@helpers/formatters'

export const stored = {
  [providers.weather.autocomplete]: '../../assets/datasets/autocomplete.json',
  [providers.weather.conditions  ]: '../../assets/datasets/conditions.json'  ,
  [providers.weather.forecasts   ]: '../../assets/datasets/forecasts.json'   ,
  [providers.weather.geoposition ]: '../../assets/datasets/geoposition.json' ,
  [providers.weather.locations   ]: '../../assets/datasets/locations.json'
}
export const errors = {
  [400]: 'Request had bad syntax or the parameters supplied were invalid.'                           ,
  [401]: 'Unauthorized. API authorization failed.'                                                   ,
  [403]: 'Unauthorized. You do not have permission to access this endpoint.'                         ,
  [404]: 'Server has not found a route matching the given URI.'                                      ,
  [500]: 'Server encountered an unexpected condition which prevented it from fulfilling the request.'
}
@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  static failCount: number = 0;
  private failCount: number = ExceptionInterceptor.failCount;
  constructor(private message: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this.message.add({ closable: true, detail: errors[error.status], severity: 'error', summary: `${error.status} Error` });
        if (req.url.includes(providers.weather.baseUrl) && error.status == 401) {
          this.failCount++;
          if (this.failCount == 1) {
            return next
              .handle(req.clone({
                params: req.params.append('apikey', decodeBase64(providers.weather.apiKey))
              }))
              .pipe(tap(x => ExceptionInterceptor.failCount = 0));
          }
        }
        this.message.add({ closable: true, detail: 'Retrieving static data from local JSON', severity: 'info', summary: 'Static Response' });
        return next.handle(req.clone({ url: stored[Object.keys(stored).find(key => req.url.includes(key))] }));
      })
    );
  }
}