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
                                            'data-target="#components-links-module-AppModule-9df8ca325217f583844c1963fb94c6c2"' : 'data-target="#xs-components-links-module-AppModule-9df8ca325217f583844c1963fb94c6c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9df8ca325217f583844c1963fb94c6c2"' :
                                            'id="xs-components-links-module-AppModule-9df8ca325217f583844c1963fb94c6c2"' }>
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
                                            'data-target="#components-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' : 'data-target="#xs-components-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' :
                                            'id="xs-components-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' : 'data-target="#xs-injectables-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' :
                                        'id="xs-injectables-links-module-ContainerModule-a08b3f97be7dd561a052c4047f76d9cf"' }>
                                        <li class="link">
                                            <a href="injectables/ApplicationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ApplicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContextService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContextService</a>
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
                                            'data-target="#components-links-module-SearchModule-b944a322e014daa28c8c2c134db9fe65"' : 'data-target="#xs-components-links-module-SearchModule-b944a322e014daa28c8c2c134db9fe65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-b944a322e014daa28c8c2c134db9fe65"' :
                                            'id="xs-components-links-module-SearchModule-b944a322e014daa28c8c2c134db9fe65"' }>
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
                                            'data-target="#components-links-module-WeatherModule-8d7523ceaf753a34d899ec02adf1abc2"' : 'data-target="#xs-components-links-module-WeatherModule-8d7523ceaf753a34d899ec02adf1abc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WeatherModule-8d7523ceaf753a34d899ec02adf1abc2"' :
                                            'id="xs-components-links-module-WeatherModule-8d7523ceaf753a34d899ec02adf1abc2"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="classes/AppSettings.html" data-type="entity-link">AppSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/Encoding.html" data-type="entity-link">Encoding</a>
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
                                    <a href="injectables/ContextService.html" data-type="entity-link">ContextService</a>
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
                                <a href="interfaces/AdministrativeArea.html" data-type="entity-link">AdministrativeArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdministrativeArea-1.html" data-type="entity-link">AdministrativeArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutoComplete.html" data-type="entity-link">AutoComplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutoComplete-1.html" data-type="entity-link">AutoComplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Conditions.html" data-type="entity-link">Conditions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link">Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DailyForecast.html" data-type="entity-link">DailyForecast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Day.html" data-type="entity-link">Day</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Elevation.html" data-type="entity-link">Elevation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeoPosition.html" data-type="entity-link">GeoPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Headline.html" data-type="entity-link">Headline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDictionary.html" data-type="entity-link">IDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Imperial.html" data-type="entity-link">Imperial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Imperial-1.html" data-type="entity-link">Imperial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchEvent.html" data-type="entity-link">ISearchEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Temperature.html" data-type="entity-link">Temperature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Temperature-1.html" data-type="entity-link">Temperature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TemperatureData.html" data-type="entity-link">TemperatureData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeSpan.html" data-type="entity-link">TimeSpan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeZone.html" data-type="entity-link">TimeZone</a>
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