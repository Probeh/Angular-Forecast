import { AbstractModel } from '@models/abstract-model'

export interface ITimeZone {
  Code            ?: string ;
  GmtOffset       ?: number ;
  IsDaylightSaving?: boolean;
  Name            ?: string ;
  NextOffsetChange?: Date   ;
}
export class TimeZone extends AbstractModel {
  public code            : string ;
  public gmtOffset       : number ;
  public isDaylightSaving: boolean;
  public nextOffsetChange: Date   ;
  constructor(args?: ITimeZone) {
    super(args);
  }
}