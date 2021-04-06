import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const ContainerRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(ContainerRoutes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
