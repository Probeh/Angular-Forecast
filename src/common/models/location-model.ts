import { IAdministrativeArea               } from '@models/administrativeArea-model'
import { BaseModel                         } from '@models/base-model'
import { ConditionsModel                   } from '@models/conditions-model'
import { ICountry           , CountryModel } from '@models/country-model'
import { ForecastModel                     } from '@models/forecast-model'
import { IGeoPosition                      } from '@models/geoPosition-model'
import { ITimeZone                         } from '@models/timeZone-model'

export interface ILocation {
  administrativeArea?: IAdministrativeArea;
  country           ?: ICountry           ;
  dataSets          ?: string[]           ;
  englishName       ?: string             ;
  geoPosition       ?: IGeoPosition       ;
  isAlias           ?: boolean            ;
  key               ?: string             ;
  localizedName     ?: string             ;
  rank              ?: number             ;
  region            ?: ICountry           ;
  timeZone          ?: ITimeZone          ;
  type              ?: string             ;
}
export class LocationModel extends BaseModel {
  public administrativeArea: IAdministrativeArea;
  public conditions        : ConditionsModel    ;
  public country           : CountryModel       ;
  public dataSets          : string[]           ;
  public englishName       : string             ;
  public flag              : string             ;
  public forecast          : ForecastModel      ;
  public geoPosition       : IGeoPosition       ;
  public isAlias           : boolean            ;
  public isFavorite        : boolean            ;
  public key               : string             ;
  public localizedName     : string             ;
  public rank              : number             ;
  public region            : CountryModel       ;
  public timeZone          : ITimeZone          ;
  public type              : string             ;
  constructor(args?: ILocation) {
    super(args);
    this.dataSets = this.dataSets ?? new Array();
  }
}