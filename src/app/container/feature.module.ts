import { PrimeNGConfig      } from 'primeng/api'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { ButtonModule       } from 'primeng/button'
import { CarouselModule     } from 'primeng/carousel'
import { CheckboxModule     } from 'primeng/checkbox'
import { DropdownModule     } from 'primeng/dropdown'
import { FieldsetModule     } from 'primeng/fieldset'
import { InputSwitchModule  } from 'primeng/inputswitch'
import { KeyFilterModule    } from 'primeng/keyfilter'
import { RadioButtonModule  } from 'primeng/radiobutton'
import { RippleModule       } from 'primeng/ripple'
import { TabMenuModule      } from 'primeng/tabmenu'
import { ToastModule        } from 'primeng/toast'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { TooltipModule      } from 'primeng/tooltip'
import { CommonModule       } from '@angular/common'
import { NgModule           } from '@angular/core'

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoCompleteModule,
    ButtonModule      ,
    CarouselModule    ,
    CheckboxModule    ,
    DropdownModule    ,
    FieldsetModule    ,
    InputSwitchModule ,
    KeyFilterModule   ,
    RadioButtonModule ,
    RippleModule      ,
    TabMenuModule     ,
    ToastModule       ,
    ToggleButtonModule,
    TooltipModule
  ]
})
export class FeatureModule {
  constructor(private primengConfig: PrimeNGConfig) { this.primengConfig.ripple = true; }
}
