import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Toggle } from '@ui-model/common';

@Directive({
  selector: '[uiToggle]',
  exportAs: 'uiToggle',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ToggleDirective,
    multi: true,
  }],
})
export class ToggleDirective extends Toggle implements ControlValueAccessor {

  constructor() {
    super();
  }

  @Input() disabled = false;
  @Input('uiToggle') isOn: boolean;
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

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
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

}
