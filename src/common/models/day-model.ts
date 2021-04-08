import { providers } from '@env/environment';
import { BaseModel } from '@models/base-model'

export interface IDay {
  HasPrecipitation?: boolean;
  Icon            ?: number ;
  IconPhrase      ?: string ;
}
export class Day extends BaseModel {
  public hasPrecipitation: boolean;
  public icon            : number ;
  public iconPhrase      : string ;
  constructor(args?: IDay) {
    super(args);
  }
  public getIcon = () => `${providers.weather.icons}/${this.icon}.svg`;
}