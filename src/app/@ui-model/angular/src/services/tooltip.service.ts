import {Injectable} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Rect} from '@ui-model/common';

@Injectable()
export class TooltipService {
  constructor() {
  }

  private _changes = new Subject<void>();
  get changes(): Observable<void> {
    return this._changes.asObservable();
  }

  protected changed(): void {
    this._changes.next();
  }

  targetRect: Rect;

  private _message: string | SafeHtml;
  get message(): string|SafeHtml {
    return this._message;
  }

  set message(value: string|SafeHtml) {
    this._message = value;
    this.changed();
  }

  get visible(): boolean {
    return !!this._message && !!this.targetRect;
  }


  show(message: string | SafeHtml, targetRect: Rect): void {
    this.message = message;
    this.targetRect = targetRect;
  }

  hide(): void {
    this.message = '';
  }
}
