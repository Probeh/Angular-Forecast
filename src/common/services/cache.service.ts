import { HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CacheResult } from '@models/cache-model'

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>)         : HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void     ;
}

@Injectable()
export class CacheService implements RequestCache {
  private readonly maxAge = 8.64e+7; // maximum cache age (ms)
  private readonly cached = new Map<string, CacheResult>();
  constructor() { }

  public get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const cachedOrigin = req.urlWithParams;
    const cachedResult = this.cached.get(cachedOrigin);
    return (!cachedResult)
      ? undefined
      : cachedResult.lastRead < (Date.now() - this.maxAge)
        ? undefined
        : cachedResult.response;
  }
  public put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const origin = req.urlWithParams;
    const expire = Date.now() - this.maxAge;
    this.cached.set(origin, { url: origin, response, lastRead: Date.now() });
    this.cached.forEach(entry => entry.lastRead < expire ? this.cached.delete(entry.url) : {});
  }
}