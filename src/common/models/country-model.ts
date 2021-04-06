import { IGeolocation                  } from '@helpers/geolocation'
import { BaseModel     , IBaseModel    } from '@models/base-model'
import { ILanguageModel, LanguageModel } from '@models/language-model'

export interface ICountryModel extends IBaseModel {
  alpha2Code  : string          ;
  alpha3Code  : string          ;
  altSpellings: string[]        ;
  capital     : string          ;
  flag        : string          ;
  languages   : ILanguageModel[];
  latlng      : number[]        ;
  region      : string          ;
  subregion   : string          ;
  timezones   : string[]        ;
}
export class CountryModel extends BaseModel {
  public alpha2Code  : string         ;
  public alpha3Code  : string         ;
  public altSpellings: string[]       ;
  public capital     : string         ;
  public coordinates : IGeolocation   ;
  public flag        : string         ;
  public languages   : LanguageModel[];
  public region      : string         ;
  public subregion   : string         ;
  public timezones   : string[]       ;
  constructor(args?: ICountryModel) {
    super(args);
  }
}