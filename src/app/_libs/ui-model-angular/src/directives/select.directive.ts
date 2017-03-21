import {Directive, forwardRef} from '@angular/core';
import {Select} from 'ui-model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectDirective),
  multi: true,
};

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  providers: [SELECT_VALUE_ACCESSOR],
})
export class SelectDirective<T> extends Select<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  protected changed(): void {
    super.changed();
    if (this._onChange) {
      this._onChange(this.selection);
    }
    this.touched();
  }

  protected touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  private _onChange: (value: T) => {};
  private _onTouched: () => {};

  writeValue(value: T): void {
    this.selection = value;
  }

  registerOnChange(fn: (value: T) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }
}
