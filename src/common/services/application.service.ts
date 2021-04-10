import { Observable, Subject, Subscriber } from 'rxjs'
import { Injectable } from '@angular/core'
import { ColorTheme } from '@constants/color-theme.enum'
import { PanelMode } from '@constants/panel-mode.enum'
import { PanelState } from '@constants/panel-state.enum'
import { DEFAULT_LOCATION } from '@env/environment'
import { AppSettings } from '@helpers/app-settings'
import { GeoPosition } from '@models/geoPosition-model'

@Injectable()
export class ApplicationService {
  public readonly appThemeChange$: Subject<ColorTheme> = new Subject();
  public readonly loadingChange$: Subject<boolean> = new Subject();
  public appThemeState$: Observable<ColorTheme>;
  public loadingState$: Observable<boolean>;
  public appTheme: ColorTheme;
  public geoPosition: GeoPosition;
  public isLoading: boolean;
  public sidenavMode: PanelMode;
  public sidenavState: PanelState;
  constructor(private args?: AppSettings) {
    this.appTheme = this.args?.appTheme;
    this.sidenavMode = this.args?.sidenavMode;
    this.sidenavState = this.args?.sidenavState;
    this.setObservables();
  }
  public getUserLocation = (): Observable<GeoPosition> => new Observable<GeoPosition>(
    (subscriber: Subscriber<GeoPosition>) => {
      navigator.geolocation
        .getCurrentPosition(
          (success) => {
            this.geoPosition = new GeoPosition({latitude: success.coords.latitude, longitude: success.coords.longitude});
            subscriber.next(this.geoPosition);
            subscriber.complete();
          },
          (failure) => {
            this.geoPosition = new GeoPosition(DEFAULT_LOCATION);
            subscriber.next(this.geoPosition);
            subscriber.complete();
          });
    }
  )

  private setObservables = () => {
    this.loadingState$ = new Observable<boolean>(
      subscriber => {
        this.loadingChange$.subscribe({
          next: value => {
            if (value != this.isLoading) {
              this.isLoading = value;
              subscriber.next(value);
            }
          }
        })
      });

    this.appThemeState$ = new Observable<ColorTheme>(
      subscriber => {
        this.appThemeChange$.subscribe({
          next: value => {
            if (value != this.appTheme) {
              this.appTheme = value;
              subscriber.next(value);
            }
          }
        })
      });
  }

}
