import { Observable    } from 'rxjs'
import { HttpClient    } from '@angular/common/http'
import { Injectable    } from '@angular/core'
import { providers     } from '@env/environment'
import { AppSettings   } from '@helpers/app-settings'
import { ISearchResult } from '@models/autoComplete-model'

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient, private args?: AppSettings) { }
  public autoComplete = (search: string): Observable<ISearchResult[]> =>
    this.http.get<ISearchResult[]>(providers.weather.autocomplete, { params: { q: search } });
}