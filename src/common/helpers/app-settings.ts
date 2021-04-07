import { ColorScheme  } from '@constants/color-scheme.enum'
import { PanelMode    } from '@constants/panel-mode.enum'
import { PanelState   } from '@constants/panel-state.enum'
import { IGeoPosition } from '@models/geoPosition-model'

export class AppSettings {
  public colorScheme ?: ColorScheme ;
  public sidenavMode ?: PanelMode   ;
  public sidenavState?: PanelState  ;
  public userLocation?: IGeoPosition;
  constructor() { }
}
