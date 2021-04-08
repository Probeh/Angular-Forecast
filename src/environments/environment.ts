export const CLIENT_ID = 'afa5425d-afd9-4c87-868c-df144bdb3b49';
export const DEFAULT_LOCATION = { /* Tel-Aviv */
  Latitude: 32.109333,
  Longitude: 34.855499
};
export const environment = {
  production: false
};
export const providers = {
  countryFlags: {
    baseUrl: 'https://www.countryflags.io'
  },
  weather: {
    apiKey           : 'YlY5QjRDdU1JMHU1R0d6a0xBaVViZXRPV29mNzBYb3k='                             ,
    autocomplete     : 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'      ,
    baseUrl          : 'https://dataservice.accuweather.com'                                       ,
    currentconditions: 'https://dataservice.accuweather.comcurrentconditions/v1'                   ,
    forecasts        : 'https://dataservice.accuweather.comforecasts/v1/daily/5day'                ,
    geoposition      : 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
    icons            : 'https://www.accuweather.com/images/weathericons'                          ,
    locations        : 'https://dataservice.accuweather.com/locations/v1'                          ,
  }
}