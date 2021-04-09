import { Observable        , of                                        } from 'rxjs'
import { HttpEvent         , HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable                                                    } from '@angular/core'
import { providers                                                     } from '@env/environment'
import { decodeBase64                                                  } from '@helpers/formatters'
import { ApplicationService                                            } from '@services/application.service'
import { RequestCache                                                  } from '@services/request-cache.service'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private application: ApplicationService, private cache: RequestCache) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.application.loadingChange$.next(true);
    req.url.includes(providers.weather.baseUrl)
      ? req.params.append('apikey', decodeBase64(providers.weather.apiKey)) : {};
    const cachedResponse = this.cache.get(req);
    return !cachedResponse ? next.handle(req) : of(cachedResponse);
  }
}
