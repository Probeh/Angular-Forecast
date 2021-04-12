import { Observable                                } from 'rxjs'
import { mergeMap                                  } from 'rxjs/operators'
import { Injectable                                } from '@angular/core'
import { ActivatedRouteSnapshot, ParamMap, Resolve } from '@angular/router'
import { environment                               } from '@env/environment'
import { Location                                  } from '@models/location-model'
import { ApplicationService                        } from '@services/application.service'
import { WeatherService                            } from '@services/weather.service'

@Injectable()
export class LocationResolver implements Resolve<Location> {
  constructor(private application: ApplicationService, private weather: WeatherService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Location> {
    const params = route.queryParamMap;

    return !environment.production
      ? this.weather.getStaticOutput()
      : (!this.application.geoLatLng)
        ? this.application
          .getUserLocation()
          .pipe(mergeMap(
            () => this.resolveAccordingly(params)))
        : this.resolveAccordingly(params);
  }

  private resolveAccordingly = (params: ParamMap): Observable<Location> => params.has('key')
    ? this.weather.getLocation(params.get('key'))
    : (params.has('lat') && params.has('lng'))
      ? this.weather.getGeoPosition(+params.get('lat'), +params.get('lng'))
      : this.weather.getGeoPosition(this.application.geoLatLng?.latitude, this.application.geoLatLng?.longitude);
}