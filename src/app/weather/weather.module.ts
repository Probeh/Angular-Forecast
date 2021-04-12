import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'
import { FeatureModule        } from '@container/feature.module'
import { WeatherRoutingModule } from '@weather/weather-routing.module'
import { WeatherComponent     } from '@weather/weather.component'

const Components = [WeatherComponent];
const Modules = [];

@NgModule({
  imports: [CommonModule, WeatherRoutingModule, FeatureModule, Modules],
  declarations: Components,
  exports: [Components, Modules],
  providers: []
})
export class WeatherModule { }
