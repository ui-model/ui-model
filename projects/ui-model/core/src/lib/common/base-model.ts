import { Observable, Subject } from 'rxjs';

export abstract class BaseModel {
  constructor() {
  }

  private _changes = new Subject<this>();

  get changes(): Observable<this> {
    return this._changes.asObservable();
  }

  protected changed(): void {
    this._changes.next(this);
  }
}
