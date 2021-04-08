import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { DataSets } from '@constants/data-sets.enum'
import { IDictionary } from '@helpers/dictionary'

@Injectable()
export class ContextService {
  private readonly context: IDictionary = {};
  public readonly onChange$: Subject<IDictionary> = new Subject();
  constructor() { this.initContext(); }
  private initContext = () =>
    Object.keys(DataSets)
      .forEach(key => this.context[key] = new Array());
}
