import { Observable, pipe } from 'rxjs'
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Geolocation } from '@helpers/geolocation'
import { ApplicationService } from '@services/application.service'
import { HttpClient } from '@angular/common/http'
import { provider } from '@env/environment'

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
            this.http.get(provider.accuweather.endpoints.)
            return x;
          }));

  }
}