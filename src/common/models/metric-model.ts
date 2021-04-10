import { AbstractModel } from '@models/abstract-model'

export interface IMetric {
  Unit    ?: string;
  UnitType?: number;
  Value   ?: number;
}
export class Metric extends AbstractModel {
  public unit    : string;
  public unitType: number;
  public value   : number;
  constructor(args?: IMetric) {
    super(args);
  }
}