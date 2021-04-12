import { AbstractModel                           } from '@models/abstract-model'
import { AdministrativeArea, IAdministrativeArea } from '@models/administrativeArea-model'
import { Conditions        , IConditions         } from '@models/conditions-model'
import { Country           , ICountry            } from '@models/country-model'
import { Forecast          , IForecast           } from '@models/forecast-model'
import { GeoPosition       , IGeoPosition        } from '@models/geoPosition-model'
import { ITimeZone         , TimeZone            } from '@models/timeZone-model'

export interface ILocation {
  AdministrativeArea?: IAdministrativeArea;
  Conditions        ?: IConditions        ;
  Country           ?: ICountry           ;
  DataSets          ?: string[]           ;
  EnglishName       ?: string             ;
  Forecast          ?: IForecast          ;
  GeoPosition       ?: IGeoPosition       ;
  IsAlias           ?: boolean            ;
  Key               ?: string             ;
  LocalizedName     ?: string             ;
  Rank              ?: number             ;
  Region            ?: ICountry           ;
  TimeZone          ?: ITimeZone          ;
  Type              ?: string             ;
}
export class Location extends AbstractModel {
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
    this.conditions         = new Conditions        (args?.Conditions        );
    this.country            = new Country           (args?.Country           );
    this.forecast           = new Forecast          (args?.Forecast          );
    this.geoPosition        = new GeoPosition       (args?.GeoPosition       );
    this.region             = new Country           (args?.Region            );
    this.timeZone           = new TimeZone          (args?.TimeZone          );
  }
  public update = (conditions: Conditions, forecast: Forecast): Location => {
    this.conditions = conditions;
    this.forecast = forecast;
    return this;
  }
}