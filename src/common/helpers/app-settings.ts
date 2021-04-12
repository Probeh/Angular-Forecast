import { ColorTheme   } from '@constants/color-theme.enum'
import { PanelMode    } from '@constants/panel-mode.enum'
import { PanelState   } from '@constants/panel-state.enum'
import { IGeoPosition } from '@models/geoPosition-model'

export class AppSettings {
  public themeOption ?: ColorTheme  ;
  public coordinates ?: IGeoPosition;
  public sidenavMode ?: PanelMode   ;
  public sidenavState?: PanelState  ;
  constructor() { }
}
