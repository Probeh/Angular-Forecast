import { BaseModel } from '@models/base-model'

export interface IDay {
  hasPrecipitation?: boolean;
  icon            ?: number ;
  iconPhrase      ?: string ;
}
export class DayModel extends BaseModel {
  public hasPrecipitation: boolean;
  public icon            : number ;
  public iconPhrase      : string ;
  constructor(args?: IDay) {
    super(args);
  }
}