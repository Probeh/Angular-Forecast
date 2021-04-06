export interface IGeolocation {
  latitude: number;
  longitude: number;
}
export class Geolocation {
  public latitude: number;
  public longitude: number;
  constructor(args?: IGeolocation) {
    Object.keys(args)?.forEach(key => this[key] = args[key] ? this[key] ?? args[key] : this[key]);
  }
}
