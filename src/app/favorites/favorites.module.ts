import { CommonModule           } from '@angular/common'
import { NgModule               } from '@angular/core'
import { FavoritesRoutingModule } from '@favorites/favorites-routing.module'
import { FavoritesComponent     } from '@favorites/favorites.component'

const Components = [FavoritesComponent];
const Modules = [];

@NgModule({
  imports     : [CommonModule, FavoritesRoutingModule, Modules],
  declarations: Components,
  exports     : [Components, Modules],
  providers   : []
})
export class FavoritesModule { }
