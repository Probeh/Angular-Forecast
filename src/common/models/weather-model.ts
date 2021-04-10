import { AbstractModel } from '@models/abstract-model'
import { Day, IDay } from '@models/day-model'
import { ITemperature, Temperature } from '@models/temperature-model'

export interface IWeather {
  Date       ?: Date        ;
  Day        ?: IDay        ;
  EpochDate  ?: number      ;
  Link       ?: string      ;
  MobileLink ?: string      ;
  Night      ?: IDay        ;
  Sources    ?: string[]    ;
  Temperature?: ITemperature;
}
export class Weather extends AbstractModel {
  public date       : Date       ;
  public day        : Day        ;
  public epochDate  : number     ;
  public link       : string     ;
  public mobileLink : string     ;
  public night      : Day        ;
  public sources    : string[]   ;
  public temperature: Temperature;
  constructor(args?: IWeather) {
    super(args);
    this.sources = this.sources ?? new Array();
    this.day         = new Day        (args?.Day        );
    this.night       = new Day        (args?.Night      );
    this.temperature = new Temperature(args?.Temperature);
  }
}