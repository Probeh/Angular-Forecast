import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs'
import { Injectable } from '@angular/core'
import { ColorTheme } from '@constants/color-theme.enum'
import { PanelMode } from '@constants/panel-mode.enum'
import { PanelState } from '@constants/panel-state.enum'
import { DEFAULT_LOCATION } from '@env/environment'
import { AppSettings } from '@helpers/app-settings'
import { GeoPosition } from '@models/geoPosition-model'

@Injectable()
export class ApplicationService {
  public $isLoading: Observable<boolean>;
  public $isLoadingChange: Subject<boolean>;
  public $siteTheme: Observable<ColorTheme>;
  public $siteThemeChange: Subject<ColorTheme>;
  public geoLatLng: GeoPosition;
  public isLoading: boolean;
  public siteTheme: ColorTheme;
  public sidenavPanel: PanelMode;
  public sidenavState: PanelState;
  constructor(private args?: AppSettings) {
    this.sidenavPanel = this.args?.sidenavMode;
    this.sidenavState = this.args?.sidenavState;
    this.$isLoadingChange = new Subject();
    this.$siteThemeChange = new BehaviorSubject(args?.themeOption);
    this.setObservables();
  }
  public getUserLocation = (): Observable<GeoPosition> => new Observable<GeoPosition>(
    (subscriber: Subscriber<GeoPosition>) => {
      navigator.geolocation
        .getCurrentPosition(
          (success) => {
            this.geoLatLng = new GeoPosition({latitude: success.coords.latitude, longitude: success.coords.longitude});
            subscriber.next(this.geoLatLng);
            subscriber.complete();
          },
          (failure) => {
            this.geoLatLng = new GeoPosition(DEFAULT_LOCATION);
            subscriber.next(this.geoLatLng);
            subscriber.complete();
          });
    }
  )

  private setObservables = () => {
    this.$isLoading = new Observable<boolean>(
      subscriber => {
        this.$isLoadingChange.subscribe({
          next: value => {
            if (value != this.isLoading) {
              this.isLoading = value;
              subscriber.next(value);
            }
          }
        })
      });

    this.$siteTheme = new Observable<ColorTheme>(
      subscriber => {
        this.$siteThemeChange.subscribe({
          next: value => {
            if (value != this.siteTheme) {
              this.siteTheme = value;
              subscriber.next(value);
            }
          }
        })
      });
  }

}
