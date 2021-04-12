import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable                                                              } from '@angular/core'
import { Observable                                                              } from 'rxjs'
import { catchError                                                              } from 'rxjs/operators'
import { providers                                                               } from '@env/environment'

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
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return next.handle(req.clone({ url: stored[Object.keys(stored).find(key => req.url.includes(key))] }));
      })
    );
  }
}