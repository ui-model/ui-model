import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Rect } from '@ui-model/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TooltipService {
  constructor() {
  }

  private _changes = new Subject<void>();
  get changes(): Observable<void> {
    return this._changes.asObservable();
  }

  protected changed(): void {
    Promise.resolve().then(() => {
      this._changes.next();
    });
  }

  pointingRect: Rect;

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
}
