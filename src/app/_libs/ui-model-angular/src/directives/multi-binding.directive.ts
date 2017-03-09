import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[uiMultiBinding]'
})
export class MultiBindingDirective {
  constructor(private element: ElementRef) {
  }

  private _value: Object;
  get value(): Object {
    return this._value;
  }

  @Input('uiMultiBinding') set value(value: Object) {
    if (this._value !== value) {
      this._value = value;
      this.update();
    }
  }

  private _prefix: string = '';
  get prefix(): string {
    return this._prefix;
  }

  @Input('uiMultiBindingPrefix') set prefix(value: string) {
    if (this._prefix != value) {
      this._prefix = value;
      this.update();
    }
  }

  private update() {
    const element = this.element.nativeElement as Element;
    for (let key in this._value) {
      element.setAttribute(this._prefix + key, this._value[key]);
    }
  }
}
