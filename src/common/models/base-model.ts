import { toCamelCase } from '@helpers/formatters';
import { Guid } from 'guid-ts'

export abstract class BaseModel {
  public created: Date;
  public id: Guid | string;
  public name: string;
  public type: string;
  constructor(args?: any) {
    Object.keys(args)?.forEach(key => this[toCamelCase(key)] = this[toCamelCase(key)] ?? args[key]);
    this.created = new Date();
    this.id = this.id ?? Guid.newGuid();
    this.type = this.type ?? this.constructor.name;
    console.log(this);
  }
}