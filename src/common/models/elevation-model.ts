import { AbstractModel } from '@models/abstract-model'
import { IMetric, Metric } from '@models/metric-model'

export interface IElevation {
  Imperial?: IMetric;
  Metric  ?: IMetric;
}
export class Elevation extends AbstractModel {
  public imperial: Metric;
  public metric  : Metric;
  constructor(args?: IElevation) {
    super(args)
    this.imperial = new Metric(args?.Imperial);
    this.metric   = new Metric(args?.Metric  );
  }
}