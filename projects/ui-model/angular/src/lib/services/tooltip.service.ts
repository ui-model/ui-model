import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Rect } from '@ui-model/core';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TooltipService {

  constructor() {
  }

  pointingRect: Rect;
  private _changes = new Subject<void>();

  get changes(): Observable<void> {
    return this._changes.asObservable()
    // wait for the next tick to ensure that changes(e.g. message) have been applied
      .pipe(delay(0));
  }

  private _message: string | SafeHtml;

  get message(): string | SafeHtml {
    return this._message;
  }

  set message(value: string | SafeHtml) {
    this._message = value;
    this.changed();
  }

  get visible(): boolean {
    return !!this._message && !!this.pointingRect;
  }

  show(message: string | SafeHtml, pointingRect: Rect): void {
    this.message = message;
    this.pointingRect = pointingRect;
  }

  hide(): void {
    this.message = '';
    this.pointingRect = undefined;
  }

  getRectFor(tooltipRect: Rect): Rect {
    if (this.pointingRect) {
      tooltipRect.moveTo(this.pointingRect.centerX - tooltipRect.halfWidth, this.pointingRect.bottom);
    }
    return tooltipRect;
  }

  protected changed(): void {
    this._changes.next();
  }
}
