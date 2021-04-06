import { BaseModel, IBaseModel } from '@models/base-model'

export interface ILanguageModel extends IBaseModel {
  iso639_1: string;
  iso639_2: string;
}
export class LanguageModel extends BaseModel {
  public iso639_1: string;
  public iso639_2: string;
  constructor(args?: ILanguageModel) {
    super(args);
  }
}