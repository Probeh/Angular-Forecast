import { BaseModel    } from '@models/base-model'
import { IDay         } from '@models/day-model'
import { ITemperature } from '@models/temperature-model'

export interface IWeather {
  date       ?: Date        ;
  day        ?: IDay        ;
  epochDate  ?: number      ;
  link       ?: string      ;
  mobileLink ?: string      ;
  night      ?: IDay        ;
  sources    ?: string[]    ;
  temperature?: ITemperature;
}
export class WeatherModel extends BaseModel {
  public date       : Date        ;
  public day        : IDay        ;
  public epochDate  : number      ;
  public link       : string      ;
  public mobileLink : string      ;
  public night      : IDay        ;
  public sources    : string[]    ;
  public temperature: ITemperature;
  constructor(args?: IWeather) {
    super(args);
  }
}