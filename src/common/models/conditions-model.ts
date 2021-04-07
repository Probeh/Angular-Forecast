import { BaseModel   } from '@models/base-model'
import { ITemperature } from '@models/temperature-model'

export interface IConditions {
  epochTime               ?: number     ;
  hasPrecipitation        ?: boolean    ;
  isDayTime               ?: boolean    ;
  link                    ?: string     ;
  localObservationDateTime?: Date       ;
  mobileLink              ?: string     ;
  temperature             ?: ITemperature;
  weatherIcon             ?: number     ;
  weatherText             ?: string     ;
}
export class ConditionsModel extends BaseModel {
  public epochTime               : number     ;
  public hasPrecipitation        : boolean    ;
  public isDayTime               : boolean    ;
  public link                    : string     ;
  public localObservationDateTime: Date       ;
  public mobileLink              : string     ;
  public temperature             : ITemperature;
  public weatherIcon             : number     ;
  public weatherText             : string     ;
  constructor(args?: IConditions) {
    super(args);
  }
}