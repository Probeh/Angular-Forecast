import { Observable                 } from 'rxjs'
import { Component         , OnInit } from '@angular/core'
import { NavigationEnd     , Router } from '@angular/router'
import { ColorTheme                 } from '@constants/color-theme.enum'
import { PanelState                 } from '@constants/panel-state.enum'
import { ApplicationService         } from '@services/application.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public currentRoute: string                ;
  public sidenavState: PanelState            ;
  public $isLoading  : Observable<boolean>   ;
  public $siteTheme  : Observable<ColorTheme>;
  constructor(private application: ApplicationService, private router: Router) {
    this.$siteTheme = this.application.$siteTheme;
    this.$isLoading = this.application.$isLoading;
    this.sidenavState = this.application.sidenavState;
    this.router.events.subscribe({
      next: event => this.currentRoute = !(event instanceof NavigationEnd)
        ? this.currentRoute
        : `Weather ${event.urlAfterRedirects.slice(1).replace('/', ' ')}`
    });
  }
  public onSidenavToggle = () =>
    this.sidenavState =
    this.sidenavState == PanelState.Hide
      ? PanelState.Show
      : PanelState.Hide;
  ngOnInit() { }
}
