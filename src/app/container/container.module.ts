import { CommonModule                     } from '@angular/common'
import { HTTP_INTERCEPTORS                } from '@angular/common/http'
import { ModuleWithProviders   , NgModule } from '@angular/core'
import { RequestInterceptor               } from '@common/interceptors/request-interceptor'
import { ResponseInterceptor              } from '@common/interceptors/response-interceptor'
import { ApplicationService               } from '@common/services/application.service'
import { NetworkService                   } from '@common/services/network.service'
import { ContainerRoutingModule           } from '@container/container-routing.module'
import { ContainerComponent               } from '@container/container.component'
import { HeaderModule                     } from '@container/header/header.module'
import { SidenavModule                    } from '@container/sidenav/sidenav.module'
import { AppSettings                      } from '@helpers/app-settings'
import { ContextService                   } from '@services/context.service'

const Components = [ContainerComponent];
const Modules = [SidenavModule, HeaderModule];

@NgModule({
  declarations: Components,
  exports: [Components, Modules],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    Modules
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor , multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    ApplicationService,
    ContextService,
    NetworkService
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