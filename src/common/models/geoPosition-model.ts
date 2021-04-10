import { AbstractModel } from '@models/abstract-model'
import { Elevation, IElevation } from '@models/elevation-model'

export interface IGeoPosition {
  Elevation?: IElevation;
  Latitude ?: number    ;
  Longitude?: number    ;
}
export class GeoPosition extends AbstractModel {
  public elevation: Elevation;
  public latitude : number   ;
  public longitude: number   ;
  constructor(args?: IGeoPosition) {
    super(args);
    this.elevation = new Elevation(args?.Elevation);
  }
}