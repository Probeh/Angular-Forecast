import { camelCase } from '@helpers/formatters';

export interface IQueryParams {
  lat?: number;
  lng?: number;
  key?: number;
}
export class QueryParams implements IQueryParams {
  public lat: number;
  public lng: number;
  public q  : string;
  constructor(args?: IQueryParams) {
    Object.assign(this, args);
  }
  public build = (): string =>
    `?${Object.entries(this).map(x => `${camelCase(x[0])}=${x[1]}`).join('&')}`;
}
