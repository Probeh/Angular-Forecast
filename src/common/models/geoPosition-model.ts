import { IElevation } from '@models/elevation-model'

export interface IGeoPosition {
  elevation?: IElevation;
  latitude ?: number    ;
  longitude?: number    ;
}
