import { Observable } from 'rxjs'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApplicationService } from '@services/application.service'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private application: ApplicationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}