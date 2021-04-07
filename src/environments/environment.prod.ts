export const CLIENT_ID = 'afa5425d-afd9-4c87-868c-df144bdb3b49';
export const DEFAULT_LOCATION = {
  // Tel-Aviv
  latitude: 32.109333,
  longitude: 34.855499
};
export const environment = {
  production: true
};
export const provider = {
  apiKey: 'YlY5QjRDdU1JMHU1R0d6a0xBaVViZXRPV29mNzBYb3k=',
  baseUrl: 'http://dataservice.accuweather.com',
  icons: 'https://www.accuweather.com/images/weathericons',
  endpoints: {
    currentconditions: 'currentconditions/v1',
    forecasts: 'forecasts/v1/daily/5day',
    locations: {
      autocomplete: 'locations/v1/cities/autocomplete',
      geoposition: 'locations/v1/cities/geoposition/search',
      locationKey: 'locations/v1'
    }
  }
}