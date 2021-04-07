import { BaseModel } from '@models/base-model'
import { IHeadline } from '@models/headline-model'
import { IWeather  } from '@models/weather-model'

export interface IForecast {
  dailyForecasts?: IWeather [];
  headline      ?: IHeadline  ;
}
export class ForecastModel extends BaseModel {
  public dailyForecasts: IWeather [];
  public headline      : IHeadline  ;
  constructor(args?: IForecast) {
    super(args);
    this.dailyForecasts = this.dailyForecasts ?? new Array();
  }
}