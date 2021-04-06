import { CommonModule     } from '@angular/common'
import { NgModule         } from '@angular/core'
import { WeatherComponent } from '@weather/weather.component'

const Components = [WeatherComponent];
const Modules    = [                ];

@NgModule({
  imports     : [CommonModule, Modules],
  declarations: Components,
  exports     : [Components, Modules],
  providers   : []
})
export class WeatherModule { }
