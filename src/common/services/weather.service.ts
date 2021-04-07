import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { provider } from '@env/environment';
import { AppSettings } from '@helpers/app-settings';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private args?: AppSettings, private http: HttpClient) { }
  public autoComplete(search: string):Promise<any> {
    return this.http.get(provider.accuweather.endpoints.locations)
  }
