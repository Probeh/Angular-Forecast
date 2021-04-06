import { BaseModel    , IBaseModel     } from '@models/base-model'
import { CountryModel , ICountryModel  } from '@models/country-model'
import { ForecastModel, IForecastModel } from '@models/forecast-model'
import { IWeatherModel, WeatherModel   } from '@models/weather-model'

export interface ILocationModel extends IBaseModel {
  conditions?: IWeatherModel   ;
  country   ?: ICountryModel   ;
  favorite  ?: boolean         ;
  forecast  ?: IForecastModel[];
}
export class LocationModel extends BaseModel {
  public conditions: WeatherModel   ;
  public country   : CountryModel   ;
  public favorite  : boolean        ;
  public forecast  : ForecastModel[];
  constructor(args?: ILocationModel) {
    super(args);
    this.forecast = this.forecast ?? new Array<ForecastModel>();
    this.favorite = args['favorite'] ?? false;
  }
}