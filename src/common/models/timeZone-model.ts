export interface ITimeZone {
  code            ?: string ;
  gmtOffset       ?: number ;
  isDaylightSaving?: boolean;
  name            ?: string ;
  nextOffsetChange?: Date   ;
}
