import { IAdministrativeArea } from '@models/administrativeArea-model'

export interface ISearchResult {
  administrativeArea?: IAdministrativeArea;
  country           ?: IAdministrativeArea;
  key               ?: string             ;
  localizedName     ?: string             ;
  rank              ?: number             ;
  type              ?: string             ;
  version           ?: number             ;
}
