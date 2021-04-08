import { BaseModel } from '@models/base-model'

export interface IMetric {
  Unit    ?: string;
  UnitType?: number;
  Value   ?: number;
}
export class Metric extends BaseModel {
  public unit    : string;
  public unitType: number;
  public value   : number;
  constructor(args?: IMetric) {
    super(args);
  }
}