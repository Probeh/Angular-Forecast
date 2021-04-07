export interface AutoComplete {
  version?:            number;
  key?:                string;
  type?:               SearchType;
  rank?:               number;
  localizedName?:      string;
  country?:            AdministrativeArea;
  administrativeArea?: AdministrativeArea;
}

export interface AdministrativeArea {
  id?:            string;
  localizedName?: string;
}

export enum SearchType {
  City = "City",
  Country = "Country",
}
