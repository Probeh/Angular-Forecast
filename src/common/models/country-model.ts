import { BaseModel } from '@models/base-model'

export interface ICountry {
  englishName  ?: string;
  id           ?: string;
  localizedName?: string;
}
export class CountryModel extends BaseModel {
  public englishName  : string;
  public id           : string;
  public localizedName: string;
  constructor(args?: ICountry) {
    super(args);
  }
}