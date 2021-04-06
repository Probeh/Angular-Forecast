import { BaseModel    , IBaseModel     } from '@models/base-model'
import { ForecastModel, IForecastModel } from '@models/forecast-model'
import { IWeatherModel, WeatherModel   } from '@models/weather-model'

export interface ILocationModel extends IBaseModel {
  conditions?: IWeatherModel   ;
  favorite  ?: boolean         ;
  forecast  ?: IForecastModel[];
}
export class LocationModel extends BaseModel {
  public conditions: WeatherModel   ;
  public favorite  : boolean        ;
  public forecast  : ForecastModel[];
  constructor(args?: ILocationModel) {
    super(args);
    this.forecast = this.forecast ?? new Array<ForecastModel>();
    this.favorite = args['favorite'] ?? false;
  }
}