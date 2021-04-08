import { Observable    , Subject                         } from 'rxjs'
import { debounceTime  , distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Component     , OnInit                          } from '@angular/core'
import { ISearchEvent                                    } from '@helpers/search-event'
import { SearchResult                                    } from '@models/autoComplete-model'
import { WeatherService                                  } from '@services/weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchText$?: Subject<string>;
  public searchPattern: RegExp = /[a-zA-Z ]/;
  public suggestions$?: Observable<SearchResult[]>;
  constructor(private weather: WeatherService) { }
  ngOnInit() {
    this.searchText$ = new Subject<string>();
    this.suggestions$ = this.searchText$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(text => this.weather.autoComplete(text.toLowerCase())));
  }
  public onSearch = (event: ISearchEvent) =>
    event.query ? this.searchText$.next(event.query) : {};
  public onSelect = (value: SearchResult) => {
    // this.weather.getConditions(value);
  };
}

