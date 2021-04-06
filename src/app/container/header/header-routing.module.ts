import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const HeaderRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(HeaderRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
