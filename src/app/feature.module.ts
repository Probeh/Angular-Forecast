import { AutoCompleteModule      } from 'primeng/autocomplete'
import { ButtonModule            } from 'primeng/button'
import { CarouselModule          } from 'primeng/carousel'
import { CheckboxModule          } from 'primeng/checkbox'
import { DropdownModule          } from 'primeng/dropdown'
import { FieldsetModule          } from 'primeng/fieldset'
import { GMapModule              } from 'primeng/gmap'
import { InputSwitchModule       } from 'primeng/inputswitch'
import { InputTextModule         } from 'primeng/inputtext'
import { KeyFilterModule         } from 'primeng/keyfilter'
import { MenuModule              } from 'primeng/menu'
import { ProgressBarModule       } from 'primeng/progressbar'
import { ProgressSpinnerModule   } from 'primeng/progressspinner'
import { RadioButtonModule       } from 'primeng/radiobutton'
import { RippleModule            } from 'primeng/ripple'
import { TabMenuModule           } from 'primeng/tabmenu'
import { ToastModule             } from 'primeng/toast'
import { ToggleButtonModule      } from 'primeng/togglebutton'
import { TooltipModule           } from 'primeng/tooltip'
import { CommonModule            } from '@angular/common'
import { HttpClientModule        } from '@angular/common/http'
import { NgModule                } from '@angular/core'
import { ReactiveFormsModule     } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [CommonModule],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AutoCompleteModule,
    ButtonModule,
    CarouselModule,
    CheckboxModule,
    DropdownModule,
    FieldsetModule,
    GMapModule,
    InputSwitchModule,
    InputTextModule,
    KeyFilterModule,
    MenuModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RippleModule,
    TabMenuModule,
    ToastModule,
    ToggleButtonModule,
    TooltipModule,
  ],
})
export class FeatureModule { }
