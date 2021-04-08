import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ColorScheme } from '@constants/color-scheme.enum'
import { PanelMode } from '@constants/panel-mode.enum'
import { PanelState } from '@constants/panel-state.enum'
import { DEFAULT_LOCATION } from '@env/environment'
import { AppSettings } from '@helpers/app-settings'
import { IGeoPosition } from '@models/geoPosition-model'

@Injectable()
export class ApplicationService {
  public readonly userLocation$: Subject<IGeoPosition> = new Subject();
  public readonly isLoading$: Subject<boolean> = new Subject();
  public colorScheme : ColorScheme ;
  public sidenavMode : PanelMode   ;
  public sidenavState: PanelState  ;
  public userLocation: IGeoPosition;
  constructor(private http: HttpClient, private args?: AppSettings) {
    this.colorScheme  = this.args.colorScheme ;
    this.sidenavMode  = this.args.sidenavMode ;
    this.sidenavState = this.args.sidenavState;
    this.getUserLocation();
  }
  private getUserLocation = () => navigator.geolocation
    .getCurrentPosition(
      (success) => this.setUserLocation({ Latitude: success.coords.latitude, Longitude: success.coords.longitude }),
      (failure) => this.setUserLocation(DEFAULT_LOCATION));

  private setUserLocation(location: IGeoPosition) {
    this.userLocation = location;
    this.userLocation$.next(location);
  }
}
