import { BaseModel } from '@models/base-model'

export interface ICountry {
  EnglishName  ?: string;
  ID           ?: string;
  LocalizedName?: string;
}
export class Country extends BaseModel {
  public englishName  : string;
  public localizedName: string;
  constructor(args?: ICountry) {
    super(args);
  }
}