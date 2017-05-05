import { Directive, forwardRef } from '@angular/core';
import { Toggle } from '@ui-model/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TOGGLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleDirective),
  multi: true,
};

@Directive({
  selector: '[uiToggle]',
  exportAs: 'uiToggle',
  providers: [TOGGLE_VALUE_ACCESSOR],
})
export class ToggleDirective extends Toggle implements ControlValueAccessor {
  constructor() {
    super();
  }

  protected changed(): void {
    super.changed();
    if (this._onChange) {
      this._onChange(this.isOn);
    }
    this.touched();
  }

  protected touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  private _onChange: (value: boolean) => {};
  private _onTouched: () => {};

  writeValue(value: boolean): void {
    this.isOn = value;
  }

  registerOnChange(fn: (value: boolean) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }
}
