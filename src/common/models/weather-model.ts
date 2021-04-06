import { BaseModel } from '@models/base-model'

export interface IWeatherModel {
}
export class WeatherModel extends BaseModel {
  constructor(args?: IWeatherModel) {
    super(args);
  }
}