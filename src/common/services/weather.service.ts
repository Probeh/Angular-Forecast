import { Observable                  } from 'rxjs'
import { map                         } from 'rxjs/operators'
import { HttpClient                  } from '@angular/common/http'
import { Injectable                  } from '@angular/core'
import { providers                   } from '@env/environment'
import { AppSettings                 } from '@helpers/app-settings'
import { ISearchResult, SearchResult } from '@models/autoComplete-model'

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient, private args?: AppSettings) { }
  public autoComplete = (search: string): Observable<SearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } }).pipe(map(results => results.map(item => new SearchResult(item))));
  public getConditions = (search: string): Observable<SearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } }).pipe(map(results => results.map(item => new SearchResult(item))));
  public getForecast = (search: string): Observable<SearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } }).pipe(map(results => results.map(item => new SearchResult(item))));
  public getGeoPosition = (search: string): Observable<SearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } }).pipe(map(results => results.map(item => new SearchResult(item))));
  public getLocation = (search: string): Observable<SearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } }).pipe(map(results => results.map(item => new SearchResult(item))));
}