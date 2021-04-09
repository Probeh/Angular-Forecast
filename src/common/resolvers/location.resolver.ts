import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ApplicationService } from '@services/application.service'

@Injectable()
export class LocationResolver implements Resolve<Geolocation> {
  constructor(private application: ApplicationService, private http: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Geolocation> | Promise<Geolocation> | null {
    return of(null);
  }
}