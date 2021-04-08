import { BaseModel } from '@models/base-model'

export interface IHeadline {
  Category          ?: string;
  EffectiveDate     ?: Date  ;
  EffectiveEpochDate?: number;
  EndDate           ?: Date  ;
  EndEpochDate      ?: number;
  Link              ?: string;
  MobileLink        ?: string;
  Severity          ?: number;
  Text              ?: string;
}
export class Headline extends BaseModel {
  public category          : string;
  public effectiveDate     : Date  ;
  public effectiveEpochDate: number;
  public endDate           : Date  ;
  public endEpochDate      : number;
  public link              : string;
  public mobileLink        : string;
  public severity          : number;
  public text              : string;
  constructor(args?: IHeadline) {
    super(args);
  }
}