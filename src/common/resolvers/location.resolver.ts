import { Observable } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router'
import { GeoPosition } from '@models/geoPosition-model'
import { Location } from '@models/location-model'
import { ApplicationService } from '@services/application.service'
import { WeatherService } from '@services/weather.service'

@Injectable()
export class LocationResolver implements Resolve<Location> {
  constructor(private application: ApplicationService, private weather: WeatherService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Location> {
    const params = route.queryParamMap;

    /* Upon initial entry, request and process the user's location */
    if (!this.application.geoPosition) {
      return this.application.getUserLocation()
        .pipe(mergeMap((position: GeoPosition) =>
          this.weather.getGeoPosition(position.latitude, position.longitude)));
    }

    /* Upon navigation with provided location keys or coordinates as query params */
    if (params.has('key'))
      return this.weather.getLocation(params.get('key'));

    else if (params.has('lat') && params.has('lng'))
      return this.weather.getGeoPosition(+params.get('lat'), +params.get('lng'));
  }
}