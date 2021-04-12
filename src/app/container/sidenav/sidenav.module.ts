import { TabMenuModule     } from 'primeng/tabmenu'
import { CommonModule      } from '@angular/common'
import { NgModule          } from '@angular/core'
import { FeatureModule     } from '@container/feature.module'
import { SettingsComponent } from '@container/sidenav/settings/settings.component'
import { SidenavComponent  } from '@container/sidenav/sidenav.component'
import { HttpClientModule } from '@angular/common/http'

const Components = [SidenavComponent, SettingsComponent];
const Modules = [];

@NgModule({
  imports: [CommonModule, FeatureModule, HttpClientModule, TabMenuModule, Modules],
  declarations: Components,
  exports: [Components, Modules],
  providers: []
})
export class SidenavModule { }
