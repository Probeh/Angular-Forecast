import { Observable  , of            } from 'rxjs'
import { map                         } from 'rxjs/operators'
import { HttpClient                  } from '@angular/common/http'
import { Injectable                  } from '@angular/core'
import { providers                   } from '@env/environment'
import { AppSettings                 } from '@helpers/app-settings'
import { AutoComplete, IAutoComplete } from '@models/autoComplete-model'
import { BaseModel                   } from '@models/base-model'
import { Conditions  , IConditions   } from '@models/conditions-model'
import { Forecast    , IForecast     } from '@models/forecast-model'
import { ILocation   , Location      } from '@models/location-model'

@Injectable()
export class WeatherService {
  private readonly context: Map<string, BaseModel[]> = new Map();
  constructor(private http: HttpClient, private args?: AppSettings) { this.createContext(); }

  private setContext = (dataSet: string, value: any): any | null => {
    !this.getContext(null, dataSet, x => x == value)
      ? this.context.get(dataSet).unshift(value) : {};
    return value;
  }
  private getContext = (key?: string, dataSet: string = 'Location', predicate?: (value: any) => unknown): any | null =>
    this.context.get(dataSet).some(predicate ?? ((item: Location) => item.key == key))
      ? this.context.get(dataSet).slice().find((item: Location) => item.key == key) : null;

  public autoComplete = (search: string): Observable<AutoComplete[]> => this.http
    .get<IAutoComplete[]>(providers.weather.autocomplete, { params: { q: search } })
    .pipe(map(result => result.map(item => new AutoComplete(item))));

  public getConditions = (locationKey: string): Observable<Conditions> => this.http
    .get<IConditions>(`${providers.weather.conditions}/${locationKey}`)
    .pipe(map(result => this.setContext('Conditions', new Conditions(result))));

  public getForecast = (locationKey: string): Observable<Forecast> => this.http
    .get<IForecast>(`${providers.weather.forecasts}/${locationKey}`)
    .pipe(map(result => new Forecast(result)));

  public getGeoPosition = (lat: number, lng: number): Observable<Location> => this.http
    .get<ILocation>(providers.weather.geoposition, { params: { q: `${lat},${lng}` } })
    .pipe(map(result => this.setContext('Location', new Location(result))));

  public getLocation = (key: string): Observable<Location> =>
    this.getContext(key)
      ? of(this.getContext(key))
      : this.http
        .get<ILocation>(`${providers.weather.locations}/${key}`)
        .pipe(map(result => this.setContext('Location', new Location(result))));

  private createContext = () => this.context
    .set('Conditions', new Array<Conditions>())
    .set('Forecast'  , new Array<Forecast  >())
    .set('Location'  , new Array<Location  >());
}