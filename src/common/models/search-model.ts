import { BaseModel, IBaseModel } from '@models/base-model'

export interface ISearchModel extends IBaseModel {
  administrativeArea: IBaseModel;
  country           : IBaseModel;
  key               : number       ;
  rank              : number       ;
  type              : string       ;
}
export class SearchModel extends BaseModel {
  constructor(args?: ISearchModel) {
    super(args);
  }
}