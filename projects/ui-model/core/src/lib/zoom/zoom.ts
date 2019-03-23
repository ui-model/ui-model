import { BaseModel, Rect } from '@ui-model/common';
import { merge, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class Zoom extends BaseModel {
  private _activeRect: Rect = new Rect();

  get activeRect(): Rect {
    return this._activeRect;
  }

  set activeRect(value: Rect) {
    this._activeRect.copyFrom(value);
    this.changed();
  }

  private _activeViewport: Rect = new Rect();

  get activeViewport(): Rect {
    return this._activeViewport;
  }

  set activeViewport(value: Rect) {
    this._activeViewport.copyFrom(value);
    this.changed();
  }

  private _passiveRect: Rect = new Rect();

  get passiveRect(): Rect {
    return this._passiveRect;
  }

  set passiveRect(value: Rect) {
    this._passiveRect.copyFrom(value);
    this.changed();
  }

  private _passiveViewport: Rect = new Rect();

  get passiveViewport(): Rect {
    return this._passiveViewport;
  }

  set passiveViewport(value: Rect) {
    this._passiveViewport.copyFrom(value);
    this.changed();
  }

  get changes(): Observable<this> {
    return merge([
      this.activeRect.changes,
      this.activeViewport.changes,
      this.passiveRect.changes,
      this.passiveViewport.changes,
    ]).pipe(
      mapTo(this),
    );
  }

  setActiveRect(value: Rect): this {
    this.activeRect = value;
    return this;
  }

  setActiveViewport(value: Rect): this {
    this.activeViewport = value;
    return this;
  }

  setPassiveRect(value: Rect): this {
    this.passiveRect = value;
    return this;
  }

  setPassiveViewport(value: Rect): this {
    this.passiveViewport = value;
    return this;
  }

  update(): void {
    const scale = this.passiveRect.width / this.activeRect.width;
    this.passiveViewport = Rect.copyFrom(this.activeViewport);
    this.passiveViewport.zoom(scale);
  }
}
