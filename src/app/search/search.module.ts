import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FeatureModule       } from '@container/feature.module'
import { SearchRoutingModule } from '@search/search-routing.module'
import { SearchComponent     } from '@search/search.component'

const Components = [SearchComponent];
const Modules = [];

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, FeatureModule, SearchRoutingModule, Modules],
  declarations:  Components  ,
  exports     : [Components  , Modules],
  providers: []
})
export class SearchModule { }
