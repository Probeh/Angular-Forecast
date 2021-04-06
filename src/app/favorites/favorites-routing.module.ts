import { NgModule                   } from '@angular/core'
import { RouterModule      , Routes } from '@angular/router'
import { FavoritesComponent         } from '@favorites/favorites.component'

export const FavoritesRoutes: Routes = [
  { path: '', component: FavoritesComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(FavoritesRoutes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
