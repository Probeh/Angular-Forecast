import { Guid } from 'guid-ts'

export abstract class BaseModel {
  public created: Date;
  public id: Guid | string;
  public name: string;
  public type: string;
  constructor(args?: any) {
    Object.keys(args)?.forEach(key => typeof (args[key]) != 'object'
      ? this[camelCase(key)] = this[camelCase(key)] ?? args[key] : {});
    this.created = new Date();
    this.id = Guid.newGuid();
    this.type = this.type ?? this.constructor.name;
  }
}
export const camelCase = (original: string): string =>
  original[0].toLowerCase() + original.substring(1);
export const titleCase = (original: string): string =>
  original.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join(' ');