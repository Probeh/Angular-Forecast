export interface Conditions {
  localObservationDateTime?: Date;
  epochTime?:                number;
  weatherText?:              string;
  weatherIcon?:              number;
  hasPrecipitation?:         boolean;
  precipitationType?:        null;
  isDayTime?:                boolean;
  temperature?:              Temperature;
  mobileLink?:               string;
  link?:                     string;
}

export interface Temperature {
  metric?:   Imperial;
  imperial?: Imperial;
}

export interface Imperial {
  value?:    number;
  unit?:     string;
  unitType?: number;
}
