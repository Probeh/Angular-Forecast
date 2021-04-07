import { Subject                       } from 'rxjs'
import { Injectable                    } from '@angular/core'
import { ColorTheme                    } from '@constants/color-theme.enum'
import { PanelMode                     } from '@constants/panel-mode.enum'
import { PanelState                    } from '@constants/panel-state.enum'
import { CLIENT_ID  , DEFAULT_LOCATION } from '@env/environment'
import { AppSettings                   } from '@helpers/app-settings'
import { Geolocation                   } from '@helpers/geolocation'

@Injectable()
export class ApplicationService {
  public readonly userLocation$: Subject<Geolocation> = new Subject();
  public readonly isLoading$: Subject<boolean> = new Subject();
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
        (success) => this.setUserLocation({ latitude: success.coords.latitude, longitude: success.coords.longitude }),
        (failure) => this.setUserLocation(DEFAULT_LOCATION)
      );
  }
  private setUserLocation(location: Geolocation) {
    this.userLocation = location;
    this.userLocation$.next(location);
  }
}
