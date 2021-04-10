import { forkJoin, Observable, of } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DataSets } from '@constants/data-sets.enum'
import { providers } from '@env/environment'
import { AppSettings } from '@helpers/app-settings'
import { AbstractModel } from '@models/abstract-model'
import { AutoComplete, IAutoComplete } from '@models/autoComplete-model'
import { Conditions, IConditions } from '@models/conditions-model'
import { Forecast, IForecast } from '@models/forecast-model'
import { ILocation, Location } from '@models/location-model'

@Injectable()
export class WeatherService {
  private readonly context: Map<DataSets, AbstractModel[]> = new Map();
  constructor(private http: HttpClient, private args?: AppSettings) { this.createContext(); }

  private setContext = (data: DataSets, value: any): any | undefined => {
    !this.getContext(null, data, x => x == value)
      ? this.context.get(data).unshift(value) : undefined;
    return value;
  }
  private getContext = (key?: string, data: DataSets = DataSets.Locations, predicate?: (value: any) => unknown): any | undefined =>
    this.context.get(data).some(predicate ?? ((item: Location) => item.key == key))
      ? this.context.get(data).slice().find((item: Location) => item.key == key) : undefined;

  public autoComplete = (search: string): Observable<AutoComplete[]> => this.http
    .get<IAutoComplete[]>(providers.weather.autocomplete, { params: { q: search } })
    .pipe(map(result => result.map(item => new AutoComplete(item))));

  public getConditions = (locationKey: string): Observable<Conditions> => this.http
    .get<IConditions>(`${providers.weather.conditions}/${locationKey}`)
    .pipe(map(result => this.setContext(DataSets.Conditions, new Conditions(result))));

  public getForecast = (locationKey: string): Observable<Forecast> => this.http
    .get<IForecast>(`${providers.weather.forecasts}/${locationKey}`)
    .pipe(map(result => new Forecast(result)));

  public getGeoPosition = (lat: number, lng: number): Observable<Location> => this.http
    .get<ILocation>(providers.weather.geoposition, { params: { q: lat + ',' + lng } })
    .pipe(mergeMap(location =>
      forkJoin(of(location), this.getConditions(location.Key), this.getForecast(location.Key))
        .pipe(map(results =>
          this.setContext(DataSets.Locations, new Location(results[0]).update(results[1], results[2]))))));

  public getLocation = (key: string): Observable<Location> => this.getContext(key)
    ? of(this.getContext(key))
    : this.http
      .get<ILocation>(`${providers.weather.locations}/${key}`)
      .pipe(mergeMap(location =>
        forkJoin(of(location), this.getConditions(location.Key), this.getForecast(location.Key))
          .pipe(map(results =>
            this.setContext(DataSets.Locations, new Location(results[0]).update(results[1], results[2]))))));

  private createContext = () => this.context
    .set(DataSets.Conditions, new Array<Conditions>())
    .set(DataSets.Forecasts, new Array<Forecast>())
    .set(DataSets.Locations, new Array<Location>());
}