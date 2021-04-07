export const CLIENT_ID = 'afa5425d-afd9-4c87-868c-df144bdb3b49';
export const DEFAULT_LOCATION = { /* Tel-Aviv */
  latitude: 32.109333,
  longitude: 34.855499
};
export const environment = {
  production: true
};
export const providers = {
  countryFlags: {
    baseUrl: 'https://www.countryflags.io'
  },
  weather: {
    apiKey           : 'YlY5QjRDdU1JMHU1R0d6a0xBaVViZXRPV29mNzBYb3k='                             ,
    autocomplete     : 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'      ,
    baseUrl          : 'http://dataservice.accuweather.com'                                       ,
    currentconditions: 'http://dataservice.accuweather.comcurrentconditions/v1'                   ,
    forecasts        : 'http://dataservice.accuweather.comforecasts/v1/daily/5day'                ,
    geoposition      : 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
    icons            : 'https://www.accuweather.com/images/weathericons'                          ,
    locations        : 'http://dataservice.accuweather.com/locations/v1'                          ,
  }
}