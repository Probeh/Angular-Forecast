import { HttpResponse } from '@angular/common/http';

export interface CacheResult {
  lastRead?: number           ;
  response?: HttpResponse<any>;
  url     ?: string           ;
}
