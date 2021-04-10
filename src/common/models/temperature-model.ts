import { AbstractModel } from '@models/abstract-model'
import { IMetric, Metric } from '@models/metric-model'

export interface ITemperature {
  Maximum?: IMetric;
  Minimum?: IMetric;
}
export class Temperature extends AbstractModel {
  public maximum: Metric;
  public minimum: Metric;
  constructor(args?: ITemperature) {
    super(args);
    this.maximum = new Metric(args?.Maximum);
    this.minimum = new Metric(args?.Minimum);
  }
}