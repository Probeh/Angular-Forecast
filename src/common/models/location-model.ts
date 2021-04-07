export interface Location {
  version?:                number;
  key?:                    string;
  type?:                   string;
  rank?:                   number;
  localizedName?:          string;
  englishName?:            string;
  primaryPostalCode?:      string;
  region?:                 Country;
  country?:                Country;
  administrativeArea?:     AdministrativeArea;
  timeZone?:               TimeZone;
  geoPosition?:            GeoPosition;
  isAlias?:                boolean;
  supplementalAdminAreas?: any[];
  dataSets?:               string[];
}

export interface AdministrativeArea {
  id?:            string;
  localizedName?: string;
  englishName?:   string;
  level?:         number;
  localizedType?: string;
  englishType?:   string;
  countryId?:     string;
}

export interface Country {
  id?:            string;
  localizedName?: string;
  englishName?:   string;
}

export interface GeoPosition {
  latitude?:  number;
  longitude?: number;
  elevation?: Elevation;
}

export interface Elevation {
  metric?:   Imperial;
  imperial?: Imperial;
}

export interface Imperial {
  value?:    number;
  unit?:     string;
  unitType?: number;
}

export interface TimeZone {
  code?:             string;
  name?:             string;
  gmtOffset?:        number;
  isDaylightSaving?: boolean;
  nextOffsetChange?: Date;
}
