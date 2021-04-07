import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { FeatureModule       } from '@container/feature.module'
import { SearchRoutingModule } from '@search/search-routing.module'
import { SearchComponent     } from '@search/search.component'
import { WeatherModule       } from '@weather/weather.module'

const Components = [SearchComponent];
const Modules = [];

@NgModule({
  imports: [CommonModule, FeatureModule, SearchRoutingModule, WeatherModule, Modules],
  declarations: Components,
  exports: [Components, Modules],
  providers: []
})
export class SearchModule { }
