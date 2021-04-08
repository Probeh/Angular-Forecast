import { MessageService                              } from 'primeng/api'
import { CommonModule                                } from '@angular/common'
import { HTTP_INTERCEPTORS     , HttpClientModule    } from '@angular/common/http'
import { ModuleWithProviders   , NgModule            } from '@angular/core'
import { ExceptionInterceptor                        } from '@common/interceptors/exception-interceptor'
import { RequestInterceptor                          } from '@common/interceptors/request-interceptor'
import { ResponseInterceptor                         } from '@common/interceptors/response-interceptor'
import { LocationResolver                            } from '@common/resolvers/location.resolver'
import { ContainerRoutingModule                      } from '@container/container-routing.module'
import { ContainerComponent                          } from '@container/container.component'
import { FeatureModule                               } from '@container/feature.module'
import { HeaderModule                                } from '@container/header/header.module'
import { SidenavModule                               } from '@container/sidenav/sidenav.module'
import { AppSettings                                 } from '@helpers/app-settings'
import { ApplicationService                          } from '@services/application.service'
import { RequestCache          , RequestCacheService } from '@services/request-cache.service'
import { WeatherService                              } from '@services/weather.service'

const Components = [ContainerComponent];
const Modules = [SidenavModule, HeaderModule, FeatureModule];

@NgModule({
  declarations: Components,
  exports: [Components, Modules],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    HttpClientModule,
    Modules
  ],
  providers: [
    { provide: RequestCache, useClass: RequestCacheService },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor  , multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor , multi: true },
    MessageService,
    ApplicationService,
    LocationResolver,
    WeatherService
  ],
})
export class ContainerModule {
  static forRoot(args?: AppSettings): ModuleWithProviders<ContainerModule> {
    return {
      ngModule: ContainerModule,
      providers: [
        { provide: AppSettings, useValue: args },
      ]
    };
  }
}