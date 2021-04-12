export const DEFAULT_LOCATION = { /* Tel-Aviv */
  latitude: 32.003,
  longitude: 34.756
};
export const environment = {
  production: false
};
export const providers = {
  countryFlags: {
    baseUrl: 'https://www.countryflags.io'
  },
  weather     : {
    apiKey      : 'YlY5QjRDdU1JMHU1R0d6a0xBaVViZXRPV29mNzBYb3k=',
    autocomplete: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
    baseUrl     : 'https://dataservice.accuweather.com',
    conditions  : 'https://dataservice.accuweather.com/currentconditions/v1',
    forecasts   : 'https://dataservice.accuweather.com/forecasts/v1/daily/5day',
    geoposition : 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
    icons       : 'https://www.accuweather.com/images/weathericons',
    locations   : 'https://dataservice.accuweather.com/locations/v1',
  }
}