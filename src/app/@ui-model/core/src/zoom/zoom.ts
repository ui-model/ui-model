import { Rect, Stateful } from '@ui-model/common';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';

export class Zoom extends Stateful {
  get activeRect(): Rect {
    return this._activeRect;
  }

  set activeRect(value: Rect) {
    this._activeRect.copyFrom(value);
    this.changed();
  }

  setActiveRect(value: Rect): this {
    this.activeRect = value;
    return this;
  }

  get activeViewport(): Rect {
    return this._activeViewport;
  }

  set activeViewport(value: Rect) {
    this._activeViewport.copyFrom(value);
    this.changed();
  }

  setActiveViewport(value: Rect): this {
    this.activeViewport = value;
    return this;
  }

  get passiveRect(): Rect {
    return this._passiveRect;
  }

  set passiveRect(value: Rect) {
    this._passiveRect.copyFrom(value);
    this.changed();
  }

  setPassiveRect(value: Rect): this {
    this.passiveRect = value;
    return this;
  }

  get passiveViewport(): Rect {
    return this._passiveViewport;
  }

  set passiveViewport(value: Rect) {
    this._passiveViewport.copyFrom(value);
    this.changed();
  }

  setPassiveViewport(value: Rect): this {
    this.passiveViewport = value;
    return this;
  }

  private _activeRect: Rect = new Rect();
  private _activeViewport: Rect = new Rect();
  private _passiveRect: Rect = new Rect();
  private _passiveViewport: Rect = new Rect();

  get changes(): Observable<this> {
    return merge([
      this.activeRect.changes,
      this.activeViewport.changes,
      this.passiveRect.changes,
      this.passiveViewport.changes,
    ]).pipe(
      map(() => this),
    );
  }

  update(): void {
    const scale = this.passiveRect.width / this.activeRect.width;
    this.passiveViewport = Rect.copyFrom(this.activeViewport);
    this.passiveViewport.zoom(scale);
  }
}
