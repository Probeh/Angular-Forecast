import { MessageService             } from 'primeng/api'
import { Observable                 } from 'rxjs'
import { Component         , OnInit } from '@angular/core'
import { NavigationEnd     , Router } from '@angular/router'
import { PanelState                 } from '@constants/panel-state.enum'
import { ApplicationService         } from '@services/application.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public currentRoute: string             ;
  public isLoading$  : Observable<boolean>;
  public sidenavState: PanelState         ;
  constructor(private application: ApplicationService, private router: Router, private message: MessageService) {
    this.isLoading$   = this.application.loadingState$;
    this.sidenavState = this.application.sidenavState ;
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
