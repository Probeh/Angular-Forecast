import { Observable      , Subject, Subscriber } from 'rxjs'
import { Injectable                            } from '@angular/core'
import { ColorTheme                            } from '@constants/color-theme.enum'
import { PanelMode                             } from '@constants/panel-mode.enum'
import { PanelState                            } from '@constants/panel-state.enum'
import { DEFAULT_LOCATION                      } from '@env/environment'
import { AppSettings                           } from '@helpers/app-settings'
import { IGeoPosition                          } from '@models/geoPosition-model'

@Injectable()
export class ApplicationService {
  public readonly appThemeChange$: Subject<ColorTheme  > = new Subject();
  public readonly loadingChange$ : Subject<boolean     > = new Subject();
  public readonly locationChange$: Subject<IGeoPosition> = new Subject();
  public appThemeState$: Observable<ColorTheme  >;
  public loadingState$ : Observable<boolean     >;
  public locationState$: Observable<IGeoPosition>;
  public appTheme    : ColorTheme    ;
  public isLoading   : boolean = true;
  public sidenavMode : PanelMode     ;
  public sidenavState: PanelState    ;
  public userLocation: IGeoPosition  ;
  constructor(private args?: AppSettings) {
    this.appTheme     = this.args?.appTheme    ;
    this.sidenavMode  = this.args?.sidenavMode ;
    this.sidenavState = this.args?.sidenavState;
    this.setObservables ();
    this.getUserLocation();
  }
  private getUserLocation = () => navigator.geolocation
    .getCurrentPosition(
      (success) => this.locationChange$.next({ Latitude: success.coords.latitude, Longitude: success.coords.longitude }),
      (failure) => this.locationChange$.next(DEFAULT_LOCATION));

  private setObservables = () => {
    this.loadingState$ = new Observable<boolean>(subscriber => {
      this.loadingChange$.subscribe({
        next: value => this.updateValue(this.isLoading, value, subscriber)
      })
    });

    this.locationState$ = new Observable<IGeoPosition>(subscriber => {
      this.locationChange$.subscribe({
        next: value => this.updateValue(this.userLocation, value, subscriber)
      })
    });

    this.appThemeState$ = new Observable<ColorTheme>(subscriber => {
      this.appThemeChange$.subscribe({
        next: value => this.updateValue(this.appTheme, value, subscriber)
      })
    });
  }

  private updateValue<T>(original: T, updated: T, subscriber: Subscriber<T>) {
    if (original != updated) {
      original = updated;
      subscriber.next(updated);
    }
  }
}
