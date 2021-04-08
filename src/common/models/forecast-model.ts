import { BaseModel } from '@models/base-model'
import { Headline, IHeadline } from '@models/headline-model'
import { IWeather, Weather } from '@models/weather-model'

export interface IForecast {
  DailyForecasts?: IWeather [];
  Headline      ?: IHeadline  ;
}
export class Forecast extends BaseModel {
  public forecasts: Weather [];
  public headline : Headline  ;
  constructor(args?: IForecast) {
    super(args);
    this.forecasts = !args?.DailyForecasts
      ? new Array()
      : args?.DailyForecasts?.map(item => new Weather(item));
    this.headline = new Headline(args?.Headline);
  }
}