import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ApplicationService } from '@services/application.service'

@Injectable()
export class LocationResolver implements Resolve<Geolocation> {
  constructor(private application: ApplicationService, private http: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Geolocation> | Promise<Geolocation> | null {
    this.application.isLoading$.next(true);

    return !this.application.userLocation
      ? this.application
        .userLocation$
        .pipe(
          map(x => {
            // this.http.get(providers.weather.endpoints.locations)
            return x;
          })) : of(null);

  }
}