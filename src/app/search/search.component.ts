import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISearchEvent } from '@helpers/search-event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;
  public suggestions: string[];
  constructor() { }
  ngOnInit() { this.initForm(); }
  private initForm() {
    this.searchForm = new FormGroup({
      'search': new FormControl('', Validators.pattern('[a-zA-Z ]*'))
    })
  }
  public onSearch(event: ISearchEvent) {
    console.log(event)
    this.suggestions = [
      "Apple",
      "Intel",
      "AMD",
      "IBM",
      "Microsoft"
    ].slice().filter(x => x.toLowerCase().includes(event.query.toLowerCase()));
  }
  public onSubmit() {

  }

}

