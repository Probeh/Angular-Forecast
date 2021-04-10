import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const AppRoutes: Routes = [
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) },
  { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'weather' }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
