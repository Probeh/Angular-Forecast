import { ColorTheme } from '@constants/color-theme.enum'
import { PanelMode } from '@constants/panel-mode.enum'
import { PanelState } from '@constants/panel-state.enum'

export class AppSettings {
  public colorTheme  ?: ColorTheme ;
  public sidenavMode ?: PanelMode  ;
  public sidenavState?: PanelState ;
  public userLocation?: Geolocation;
  constructor() { }
}
