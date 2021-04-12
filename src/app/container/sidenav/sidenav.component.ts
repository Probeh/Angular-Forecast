import { HttpClient                        } from '@angular/common/http'
import { Component         , Input, OnInit } from '@angular/core'
import { PanelState                        } from '@constants/panel-state.enum'
import { ApplicationService                } from '@services/application.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public sidenavState: PanelState;
  public output: string[];
  constructor(private config: ApplicationService, private http: HttpClient) { }
  ngOnInit() {
    this.http.get('../../../assets/datasets/output.json').toPromise().then(result => this.output = JSON.stringify(result).split(/[{}]/));
  }

}
