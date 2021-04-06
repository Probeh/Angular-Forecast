import { Injectable                    } from '@angular/core'
import { ColorTheme                    } from '@constants/color-theme.enum'
import { PanelMode                     } from '@constants/panel-mode.enum'
import { PanelState                    } from '@constants/panel-state.enum'
import { CLIENT_ID  , DEFAULT_POSITION } from '@env/environment'
import { AppSettings                   } from '@helpers/app-settings'
import { Geolocation                   } from '@helpers/geolocation'

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
    this.getUserLocation();
  }
  private getUserLocation() {
    navigator.geolocation
      .getCurrentPosition(
        (success) => this.userLocation = new Geolocation({ latitude: success.coords.latitude, longitude: success.coords.longitude }),
        (failure) => this.userLocation = DEFAULT_POSITION
      );
  }
}
