export const CLIENT_ID = 'afa5425d-afd9-4c87-868c-df144bdb3b49';
export const DEFAULT_POSITION = {
  // Tel-Aviv
  latitude: 32.109333,
  longitude: 34.855499
};
export const environment = {
  production: false
};
export const providers = {
  accuweather: {
    apiKey: 'YlY5QjRDdU1JMHU1R0d6a0xBaVViZXRPV29mNzBYb3k=',
    baseUrl: 'http://dataservice.accuweather.com',
    endpoints: {
      forecasts: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day',
      liveweather: 'http://dataservice.accuweather.com/currentconditions/v1',
      locations: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    }
  }
}