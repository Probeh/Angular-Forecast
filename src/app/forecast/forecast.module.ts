import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { ForecastRoutingModule } from '@forecast/forecast-routing.module'
import { ForecastComponent     } from '@forecast/forecast.component'

const Components = [ForecastComponent];
const Modules = [];

@NgModule({
  imports     : [CommonModule, ForecastRoutingModule, Modules],
  declarations: Components,
  exports     : [Components, Modules],
  providers   : []
})
export class ForecastModule { }
