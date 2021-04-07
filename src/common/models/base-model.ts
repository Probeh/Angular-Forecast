import { Guid      } from 'guid-ts'
import { providers } from '@env/environment'

export class BaseModel {
  public created: Date         ;
  public uid    : Guid | string;
  constructor(args?: any) {
    Object.keys(args)?.forEach(key => this[key] ? this[key] = this[key] ?? args[key] : {});
    this.created = new Date();
    this.uid = Guid.newGuid();
  }
  public getFlag = (code: string, size: string) => `${providers.countryFlags.baseUrl}/${code}/shiny/${size}.png`;
  public getIcon = (code: number) => `${providers.weather.icons}/${code}.svg`;
}
