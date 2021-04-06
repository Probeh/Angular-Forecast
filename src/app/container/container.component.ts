import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router';
import { ApplicationService } from '@common/services/application.service'
import { PanelState } from '@constants/panel-state.enum'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public sidenavState: PanelState;
  public currentRoute: string;
  constructor(private app: ApplicationService, private router: Router) {
    this.sidenavState = this.app.sidenavState;
    this.router.events.subscribe({
      next: event =>
        this.currentRoute = !(event instanceof NavigationEnd) ? this.currentRoute :
          `Weather ${event.urlAfterRedirects.slice(1).replace('/', ' ')}`
    });

  }
  ngOnInit() { }
  public onSidenavToggle() {
    this.sidenavState =
      this.sidenavState == PanelState.Hide
        ? PanelState.Show
        : PanelState.Hide;
  }
}
