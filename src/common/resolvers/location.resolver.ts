import { Observable                              } from 'rxjs'
import { mergeMap                                } from 'rxjs/operators'
import { Injectable                              } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router'
import { GeoPosition                             } from '@models/geoPosition-model'
import { Location                                } from '@models/location-model'
import { ApplicationService                      } from '@services/application.service'
import { WeatherService                          } from '@services/weather.service'

@Injectable()
export class LocationResolver implements Resolve<Location> {
  constructor(private application: ApplicationService, private weather: WeatherService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Location> {
    const params = route.queryParamMap;

    if (params.has('key'))
      return this.weather.getLocation(params.get('key'));

    if (!this.application.geoLatLng) {
      return this.application.getUserLocation()
        .pipe(mergeMap((position: GeoPosition) =>
          this.weather.getGeoPosition(position.latitude, position.longitude)));
    }

    if (params.has('lat') && params.has('lng'))
      return this.weather.getGeoPosition(+params.get('lat'), +params.get('lng'));
  }
}