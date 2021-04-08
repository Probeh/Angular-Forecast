import { providers } from '@env/environment';
import { BaseModel } from '@models/base-model'
import { ITemperature, Temperature } from '@models/temperature-model'

export interface IConditions {
  EpochTime               ?: number      ;
  HasPrecipitation        ?: boolean     ;
  IsDayTime               ?: boolean     ;
  Link                    ?: string      ;
  LocalObservationDateTime?: Date        ;
  MobileLink              ?: string      ;
  Temperature             ?: ITemperature;
  WeatherIcon             ?: number      ;
  WeatherText             ?: string      ;
}
export class Conditions extends BaseModel {
  public epochTime               : number     ;
  public hasPrecipitation        : boolean    ;
  public isDayTime               : boolean    ;
  public link                    : string     ;
  public localObservationDateTime: Date       ;
  public mobileLink              : string     ;
  public temperature             : Temperature;
  public weatherIcon             : number     ;
  public weatherText             : string     ;
  constructor(args?: IConditions) {
    super(args);
    this.temperature = new Temperature(args?.Temperature);
  }
  public getIcon = () => `${providers.weather.icons}/${this.weatherIcon}.svg`;
}