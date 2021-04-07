export interface IHeadline {
  category          ?: string;
  effectiveDate     ?: Date  ;
  effectiveEpochDate?: number;
  endDate           ?: Date  ;
  endEpochDate      ?: number;
  link              ?: string;
  mobileLink        ?: string;
  severity          ?: number;
  text              ?: string;
}
