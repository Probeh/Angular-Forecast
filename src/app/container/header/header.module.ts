import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { HeaderRoutingModule } from '@container/header/header-routing.module'
import { HeaderComponent     } from '@container/header/header.component'

const Components = [HeaderComponent];
const Modules = [];

@NgModule({
  imports     : [CommonModule, HeaderRoutingModule, Modules],
  declarations:  Components  ,
  exports     : [Components  , Modules],
  providers: []
})
export class HeaderModule { }
