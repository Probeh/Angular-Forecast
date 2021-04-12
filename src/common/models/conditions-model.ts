import { providers                  } from '@env/environment'
import { animationMap               } from '@helpers/animation-map'
import { AbstractModel              } from '@models/abstract-model'
import { ITemperature , Temperature } from '@models/temperature-model'

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
export class Conditions extends AbstractModel {
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
  public getAnimation = (): string => {
    const result = animationMap[this.weatherText.toLowerCase()] ?? animationMap[`${this.weatherText.toLowerCase()} ${this.isDayTime ? 'day' : 'night'}`];
    return `../../assets/images/anim/${result}.svg`;
  }
}