import { providers                               } from '@env/environment'
import { AdministrativeArea, IAdministrativeArea } from '@models/administrativeArea-model'
import { BaseModel                               } from '@models/base-model'

export interface ISearchResult {
  AdministrativeArea: IAdministrativeArea;
  Country           : IAdministrativeArea;
  Key               : string             ;
  LocalizedName     : string             ;
  Rank              : number             ;
  Type              : string             ;
  Version           : number             ;
}
export class SearchResult extends BaseModel {
  public administrativeArea: AdministrativeArea;
  public country           : AdministrativeArea;
  public key               : string            ;
  public localizedName     : string            ;
  public rank              : number            ;
  public version           : number            ;
  constructor(args?: ISearchResult) {
    super(args);
    this.administrativeArea = new AdministrativeArea(args?.AdministrativeArea);
    this.country            = new AdministrativeArea(args?.Country           );
  }
  public toString = (): string => `${super.name} (${this.type}), ${this.country.localizedName} (${this.administrativeArea.localizedName})`;
  public flagIcon = (): string => `${providers.countryFlags.baseUrl}/${this.country.id}/shiny/32.png`;
}

