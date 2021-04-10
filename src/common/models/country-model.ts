import { AbstractModel } from '@models/abstract-model'

export interface ICountry {
  EnglishName  ?: string;
  ID           ?: string;
  LocalizedName?: string;
}
export class Country extends AbstractModel {
  public englishName  : string;
  public localizedName: string;
  constructor(args?: ICountry) {
    super(args);
  }
}