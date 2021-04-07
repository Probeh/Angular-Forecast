import { Observable        , Subject                         } from 'rxjs'
import { debounceTime      , distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Component         , OnInit                          } from '@angular/core'
import { ISearchEvent                                        } from '@helpers/search-event'
import { ISearchResult                                       } from '@models/autoComplete-model'
import { WeatherService                                      } from '@services/weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchText$?: Subject<string>;
  public suggestions$?: Observable<ISearchResult[]>;
  constructor(private weather: WeatherService) { }
  ngOnInit() {
    this.searchText$ = new Subject<string>();
    this.suggestions$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text => this.weather.autoComplete(text))
    );
  }
  public onSearch = (event: ISearchEvent) =>
    this.searchText$.next(event.query);
  public onSelect = (value: ISearchEvent) => null;
}

