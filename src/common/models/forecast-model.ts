export interface AutoComplete {
  headline?:       Headline;
  dailyForecasts?: DailyForecast[];
}

export interface DailyForecast {
  date?:        Date;
  epochDate?:   number;
  temperature?: Temperature;
  day?:         Day;
  night?:       Day;
  sources?:     string[];
  mobileLink?:  string;
  link?:        string;
}

export interface Day {
  icon?:             number;
  iconPhrase?:       string;
  hasPrecipitation?: boolean;
}

export interface Temperature {
  minimum?: TemperatureData;
  maximum?: TemperatureData;
}

export interface TemperatureData {
  value?:    number;
  unit?:     Unit;
  unitType?: number;
}

export enum Unit {
  F = "F",
  C = "C",
}

export interface Headline {
  effectiveDate?:      Date;
  effectiveEpochDate?: number;
  severity?:           number;
  text?:               string;
  category?:           string;
  endDate?:            Date;
  endEpochDate?:       number;
  mobileLink?:         string;
  link?:               string;
}
