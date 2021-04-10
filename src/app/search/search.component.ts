import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core'
import { ISearchEvent } from '@helpers/search-event'
import { AutoComplete } from '@models/autoComplete-model'
import { WeatherService } from '@services/weather.service'
import { MenuItem } from 'primeng/api'
import { IMenuEvent } from '@helpers/menu-event'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchSubject$?: Subject<string>;
  public coordinatesForm: FormGroup;
  public searchOptions: MenuItem[];
  public currentOption: MenuItem;
  public searchPattern: RegExp = /[a-zA-Z ]/;
  public suggestions$?: Observable<AutoComplete[]>;
  constructor(private weather: WeatherService) { }
  ngOnInit() {
    this.createForm();
    this.setOptions();
    this.currentOption = this.searchOptions[1];
    this.searchSubject$ = new Subject<string>();
    this.suggestions$ = this.searchSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text => this.weather.autoComplete(text.toLowerCase())));
  }
  public onSearch = (event: ISearchEvent) =>
    event.query ? this.searchSubject$.next(event.query) : undefined;
  public onSelect = (value: AutoComplete) => {

    // this.weather.getConditions(value);
  };
  public onSubmit = ($event) => { }
  public createForm = () => this.coordinatesForm =
    new FormGroup({
      lat: new FormControl(undefined, [Validators.required, Validators.max(90.0000000), Validators.min(-90.0000000)]),
      lng: new FormControl(undefined, [Validators.required, Validators.max(180.0000000), Validators.min(-180.0000000)]),
    });
  private setOptions = () => {
    this.searchOptions = [
      { label: 'Location', icon: 'fa fa-map-marker', command: (e: IMenuEvent) => this.currentOption = e.item },
      {
        label: 'Coordinates',
        icon: 'fa fa-compass',
        command: (e: IMenuEvent) => {
          this.currentOption = e.item;
          this.createForm();
        }
      },
    ];
  }
}

