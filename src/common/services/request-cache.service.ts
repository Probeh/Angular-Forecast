import { HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

export interface CacheModel {
  lastRead?: number           ;
  response?: HttpResponse<any>;
  url     ?: string           ;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const maxAge = 8.64e+7; // maximum cache age (ms)

@Injectable()
export class RequestCacheService implements RequestCache {
  private cache = new Map<string, CacheModel>();

  constructor() { }

  public get(req: HttpRequest<any>): HttpResponse<any> | undefined{
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    return isExpired ? undefined : cached.response;
  }

  public put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const newEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, newEntry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });
  }
}