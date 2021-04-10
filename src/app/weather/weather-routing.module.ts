import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocationResolver } from '@common/resolvers/location.resolver';
import { WeatherComponent } from '@weather/weather.component'

export const WeatherRoutes: Routes = [
  { path: '', resolve: { location: LocationResolver }, runGuardsAndResolvers: 'always', component: WeatherComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(WeatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
