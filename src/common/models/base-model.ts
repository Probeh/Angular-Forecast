import { Guid } from 'guid-ts'

export interface IBaseModel {
  alias        ?: string;
  id           ?: string;
  localizedName?: string;
  name         ?: string;
  title        ?: string;
  type         ?: string;
}
export abstract class BaseModel {
  public alias: string;
  public id   : string;
  public name : string;
  public title: string;
  public type : string;
  constructor(args?: IBaseModel) {
    this.id = Guid.newGuid().toString();
    Object.keys(args)?.forEach(key => this[key] = args[key] ? this[key] ?? args[key] : this[key]);
  }
}
