import { CommonModule     } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule         } from '@angular/core'
import { FeatureModule    } from '@container/feature.module'
import { SidenavComponent } from '@container/sidenav/sidenav.component'

const Components = [SidenavComponent];
const Modules = [];

@NgModule({
  imports: [CommonModule, FeatureModule, HttpClientModule, Modules],
  declarations: Components,
  exports: [Components, Modules],
  providers: []
})
export class SidenavModule { }
