import { NgModule         } from '@angular/core'
import { BrowserModule    } from '@angular/platform-browser'
import { AppRoutingModule } from '@client/app-routing.module'
import { AppComponent     } from '@client/app.component'
import { FeatureModule    } from '@client/feature.module'
import { ColorTheme       } from '@constants/color-theme.enum'
import { PanelMode        } from '@constants/panel-mode.enum'
import { PanelState       } from '@constants/panel-state.enum'
import { ContainerModule  } from '@container/container.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    ContainerModule.forRoot({
      colorTheme: ColorTheme.Light,
      sidenavMode: PanelMode.Push,
      sidenavState: PanelState.Hide
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
