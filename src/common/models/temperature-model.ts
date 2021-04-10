import { AbstractModel } from '@models/abstract-model'
import { IMetric, Metric } from '@models/metric-model'

export interface ITemperature {
  Imperial?: IMetric;
  Maximum ?: IMetric;
  Metric  ?: IMetric;
  Minimum ?: IMetric;
}
export class Temperature extends AbstractModel {
  public imperial: Metric;
  public maximum : Metric;
  public metric  : Metric;
  public minimum : Metric;
  constructor(args?: ITemperature) {
    super(args);
    this.imperial = new Metric(args?.Imperial);
    this.maximum  = new Metric(args?.Maximum );
    this.metric   = new Metric(args?.Metric  );
    this.minimum  = new Metric(args?.Minimum );
  }
}