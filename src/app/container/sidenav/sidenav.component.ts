import { Component, Input, OnInit } from '@angular/core'
import { PanelState } from '@constants/panel-state.enum';
import { ApplicationService } from '@services/application.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public sidenavState: PanelState = PanelState.Hide;
  constructor(private config: ApplicationService) { }
  ngOnInit() { }
}
