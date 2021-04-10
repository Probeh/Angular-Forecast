'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Herolo-Forecast</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d769a4045a517f8cb8e3f8c58714f738"' : 'data-target="#xs-components-links-module-AppModule-d769a4045a517f8cb8e3f8c58714f738"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d769a4045a517f8cb8e3f8c58714f738"' :
                                            'id="xs-components-links-module-AppModule-d769a4045a517f8cb8e3f8c58714f738"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContainerModule.html" data-type="entity-link">ContainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' : 'data-target="#xs-components-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' :
                                            'id="xs-components-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' : 'data-target="#xs-injectables-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' :
                                        'id="xs-injectables-links-module-ContainerModule-b0edfa3ec57b653dd6cf6afdf988e352"' }>
                                        <li class="link">
                                            <a href="injectables/ApplicationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ApplicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WeatherService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WeatherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContainerRoutingModule.html" data-type="entity-link">ContainerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesModule.html" data-type="entity-link">FavoritesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritesModule-b7f1eaef50eef7ebed4eab59125773fb"' : 'data-target="#xs-components-links-module-FavoritesModule-b7f1eaef50eef7ebed4eab59125773fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritesModule-b7f1eaef50eef7ebed4eab59125773fb"' :
                                            'id="xs-components-links-module-FavoritesModule-b7f1eaef50eef7ebed4eab59125773fb"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesRoutingModule.html" data-type="entity-link">FavoritesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureModule.html" data-type="entity-link">FeatureModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForecastModule.html" data-type="entity-link">ForecastModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForecastModule-c005172e3a38544086ab16f490963676"' : 'data-target="#xs-components-links-module-ForecastModule-c005172e3a38544086ab16f490963676"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForecastModule-c005172e3a38544086ab16f490963676"' :
                                            'id="xs-components-links-module-ForecastModule-c005172e3a38544086ab16f490963676"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForecastRoutingModule.html" data-type="entity-link">ForecastRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-775921c25f03729622c95a1ccc11c5e1"' : 'data-target="#xs-components-links-module-HeaderModule-775921c25f03729622c95a1ccc11c5e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-775921c25f03729622c95a1ccc11c5e1"' :
                                            'id="xs-components-links-module-HeaderModule-775921c25f03729622c95a1ccc11c5e1"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderRoutingModule.html" data-type="entity-link">HeaderRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link">SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-98d40bdcd13937c584d4e90bdbf4c558"' : 'data-target="#xs-components-links-module-SearchModule-98d40bdcd13937c584d4e90bdbf4c558"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-98d40bdcd13937c584d4e90bdbf4c558"' :
                                            'id="xs-components-links-module-SearchModule-98d40bdcd13937c584d4e90bdbf4c558"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link">SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidenavModule.html" data-type="entity-link">SidenavModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidenavModule-66d885ad2aad6a41307616e3860549e0"' : 'data-target="#xs-components-links-module-SidenavModule-66d885ad2aad6a41307616e3860549e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidenavModule-66d885ad2aad6a41307616e3860549e0"' :
                                            'id="xs-components-links-module-SidenavModule-66d885ad2aad6a41307616e3860549e0"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WeatherModule.html" data-type="entity-link">WeatherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WeatherModule-1bf8ad33b88649b9116b05a44fd2cd4c"' : 'data-target="#xs-components-links-module-WeatherModule-1bf8ad33b88649b9116b05a44fd2cd4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WeatherModule-1bf8ad33b88649b9116b05a44fd2cd4c"' :
                                            'id="xs-components-links-module-WeatherModule-1bf8ad33b88649b9116b05a44fd2cd4c"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WeatherRoutingModule.html" data-type="entity-link">WeatherRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FavoritesComponent.html" data-type="entity-link">FavoritesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForecastComponent.html" data-type="entity-link">ForecastComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link">SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent.html" data-type="entity-link">SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidenavComponent.html" data-type="entity-link">SidenavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WeatherComponent.html" data-type="entity-link">WeatherComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdministrativeArea.html" data-type="entity-link">AdministrativeArea</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppSettings.html" data-type="entity-link">AppSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/AutoComplete.html" data-type="entity-link">AutoComplete</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModel.html" data-type="entity-link">BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Conditions.html" data-type="entity-link">Conditions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link">Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/Day.html" data-type="entity-link">Day</a>
                            </li>
                            <li class="link">
                                <a href="classes/Elevation.html" data-type="entity-link">Elevation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Forecast.html" data-type="entity-link">Forecast</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeoPosition.html" data-type="entity-link">GeoPosition</a>
                            </li>
                            <li class="link">
                                <a href="classes/Headline.html" data-type="entity-link">Headline</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/Metric.html" data-type="entity-link">Metric</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestCache.html" data-type="entity-link">RequestCache</a>
                            </li>
                            <li class="link">
                                <a href="classes/Temperature.html" data-type="entity-link">Temperature</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeZone.html" data-type="entity-link">TimeZone</a>
                            </li>
                            <li class="link">
                                <a href="classes/Weather.html" data-type="entity-link">Weather</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApplicationService.html" data-type="entity-link">ApplicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheService.html" data-type="entity-link">CacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeatherService.html" data-type="entity-link">WeatherService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ExceptionInterceptor.html" data-type="entity-link">ExceptionInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/RequestInterceptor.html" data-type="entity-link">RequestInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ResponseInterceptor.html" data-type="entity-link">ResponseInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LocationResolver.html" data-type="entity-link">LocationResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CacheResult.html" data-type="entity-link">CacheResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdministrativeArea.html" data-type="entity-link">IAdministrativeArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAutoComplete.html" data-type="entity-link">IAutoComplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConditions.html" data-type="entity-link">IConditions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICountry.html" data-type="entity-link">ICountry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDay.html" data-type="entity-link">IDay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElevation.html" data-type="entity-link">IElevation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IForecast.html" data-type="entity-link">IForecast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGeoPosition.html" data-type="entity-link">IGeoPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHeadline.html" data-type="entity-link">IHeadline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILocation.html" data-type="entity-link">ILocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuEvent.html" data-type="entity-link">IMenuEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMetric.html" data-type="entity-link">IMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchEvent.html" data-type="entity-link">ISearchEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITemperature.html" data-type="entity-link">ITemperature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeZone.html" data-type="entity-link">ITimeZone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeather.html" data-type="entity-link">IWeather</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});