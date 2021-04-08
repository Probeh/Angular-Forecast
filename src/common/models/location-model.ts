import { AdministrativeArea, IAdministrativeArea } from '@models/administrativeArea-model'
import { BaseModel } from '@models/base-model'
import { Conditions } from '@models/conditions-model'
import { Country, ICountry } from '@models/country-model'
import { Forecast } from '@models/forecast-model'
import { GeoPosition, IGeoPosition } from '@models/geoPosition-model'
import { ITimeZone, TimeZone } from '@models/timeZone-model'

export interface ILocation {
  AdministrativeArea?: IAdministrativeArea;
  Country?: ICountry;
  DataSets?: string[];
  EnglishName?: string;
  GeoPosition?: IGeoPosition;
  IsAlias?: boolean;
  Key?: string;
  LocalizedName?: string;
  Rank?: number;
  Region?: ICountry;
  TimeZone?: ITimeZone;
  Type?: string;
}
export class LocationModel extends BaseModel {
  public administrativeArea: AdministrativeArea;
  public conditions        : Conditions        ;
  public country           : Country           ;
  public dataSets          : string[]          ;
  public englishName       : string            ;
  public forecast          : Forecast          ;
  public geoPosition       : GeoPosition       ;
  public isAlias           : boolean           ;
  public isFavorite        : boolean           ;
  public key               : string            ;
  public localizedName     : string            ;
  public rank              : number            ;
  public region            : Country           ;
  public timeZone          : TimeZone          ;
  constructor(args?: ILocation) {
    super(args);
    this.dataSets = this.dataSets ?? new Array();
    this.administrativeArea = new AdministrativeArea(args?.AdministrativeArea)
    this.country            = new Country           (args?.Country           );
    this.geoPosition        = new GeoPosition       (args?.GeoPosition       );
    this.region             = new Country           (args?.Region            );
    this.timeZone           = new TimeZone          (args?.TimeZone          );
  }
}