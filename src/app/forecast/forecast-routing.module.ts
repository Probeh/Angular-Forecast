import { NgModule                  } from '@angular/core'
import { RouterModule     , Routes } from '@angular/router'
import { ForecastComponent         } from '@forecast/forecast.component'

export const ForecastRoutes: Routes = [
  { path: '', component: ForecastComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(ForecastRoutes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
