import { Injectable  } from '@angular/core'
import { ColorTheme  } from '@constants/color-theme.enum'
import { PanelMode   } from '@constants/panel-mode.enum'
import { PanelState  } from '@constants/panel-state.enum'
import { CLIENT_ID   } from '@env/environment'
import { AppSettings } from '@helpers/app-settings'

@Injectable()
export class ApplicationService {
  public clientSecret: string     ;
  public colorTheme  : ColorTheme ;
  public sidenavMode : PanelMode  ;
  public sidenavState: PanelState ;
  public userLocation: Geolocation;
  constructor(private args?: AppSettings) {
    this.clientSecret = CLIENT_ID       ;
    this.colorTheme   = ColorTheme.Light;
    this.sidenavMode  = PanelMode .Push ;
    this.sidenavState = this.args.sidenavState;
  }
}
