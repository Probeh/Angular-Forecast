import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { SearchRoutingModule } from '@search/search-routing.module'
import { SearchComponent     } from '@search/search.component'

const Components = [SearchComponent];
const Modules = [];

@NgModule({
  imports: [CommonModule, SearchRoutingModule, Modules],
  declarations: Components,
  exports: [Components, Modules],
  providers: []
})
export class SearchModule { }
