import { camelCase } from '@helpers/formatters';
import { Guid } from 'guid-ts'

export abstract class AbstractModel {
  public created: Date;
  public id: Guid | string;
  public name: string;
  public type: string;
  constructor(args?: any) {
    args ? Object.keys(args)?.forEach(key => this[camelCase(key)] = this[camelCase(key)] ?? args[key]) : {};
    this.created = new Date();
    this.id = this.id ?? Guid.newGuid();
    this.type = this.type ?? this.constructor.name;
  }
}