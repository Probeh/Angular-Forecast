import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public onChange: EventEmitter<void> = new EventEmitter();
  public currentDate: Date = new Date();
  constructor() { }
  ngOnInit() { }
  public toggleSidenav = () => this.onChange.emit();
}
