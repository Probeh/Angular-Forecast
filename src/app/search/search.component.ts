import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core'
import { ISearchEvent } from '@helpers/search-event'
import { AutoComplete } from '@models/autoComplete-model'
import { WeatherService } from '@services/weather.service'
import { MenuItem } from 'primeng/api'
import { IMenuEvent } from '@helpers/menu-event'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public $searchValue: Subject<string>;
  public $suggestions: Observable<AutoComplete[]>;
  public currentOption: MenuItem;
  public locationInput: FormGroup;
  public searchOptions: MenuItem[];
  public searchPattern: RegExp = /[a-zA-Z ]/;
  constructor(private weather: WeatherService, private router: Router) { }
  ngOnInit() {
    this.createForm();
    this.setOptions();
    this.currentOption = this.searchOptions[0];
    this.$searchValue = new Subject<string>();
    this.$suggestions = this.$searchValue.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text => this.weather.autoComplete(text.toLowerCase())));
  }
  public onSearch = (event: ISearchEvent) =>
    event.query ? this.$searchValue.next(event.query) : undefined;
  public onSelect = (value: AutoComplete) =>
    this.router.navigate(['weather'], { queryParams: { key: value.key } });
  public onSubmit = () =>
    this.router.navigate(['weather'], { queryParams: this.locationInput.value });
  public createForm = () => this.locationInput =
    new FormGroup({
      lat: new FormControl(undefined, [Validators.required, Validators.max(90.0000000), Validators.min(-90.0000000)]),
      lng: new FormControl(undefined, [Validators.required, Validators.max(180.0000000), Validators.min(-180.0000000)]),
    });
  private setOptions = () => this.searchOptions = [
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

