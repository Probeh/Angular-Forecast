import { TimeSpan } from '@helpers/timespan';
import { BaseModel, IBaseModel } from '@models/base-model'
import { ILocationModel, LocationModel } from '@models/location-model';
import { IWeatherModel, WeatherModel } from '@models/weather-model';

export interface IForecastModel extends IBaseModel {
  location?: ILocationModel  ;
  period  ?: TimeSpan        ;
  weather ?: IWeatherModel [];
}
export class ForecastModel extends BaseModel {
  public location: LocationModel  ;
  public period  : TimeSpan       ;
  public weather : WeatherModel [];
  constructor(args?: IForecastModel) {
    super(args);
    this.weather = this.weather ?? new Array<WeatherModel>();
  }
}