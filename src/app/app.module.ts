import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '@client/app-routing.module'
import { AppComponent } from '@client/app.component'
import { ColorTheme } from '@constants/color-theme.enum'
import { PanelMode } from '@constants/panel-mode.enum'
import { PanelState } from '@constants/panel-state.enum'
import { ContainerModule } from '@container/container.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ContainerModule.forRoot({
      colorTheme: ColorTheme.Light,
      sidenavMode: PanelMode.Push,
      sidenavState: PanelState.Hide,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }