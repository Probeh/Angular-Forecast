import { NgModule                 } from '@angular/core'
import { RouterModule    , Routes } from '@angular/router'
import { WeatherComponent         } from '@weather/weather.component'

export const WeatherRoutes: Routes = [
  { path: '', component: WeatherComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(WeatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
