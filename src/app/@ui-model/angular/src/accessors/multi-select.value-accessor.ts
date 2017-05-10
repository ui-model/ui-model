import { ControlValueAccessor } from '@angular/forms';
import { MultiSelect } from '@ui-model/core';

export class MultiSelectValueAccessor<T> extends MultiSelect<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  disabled = false;

  enable(): void {
    this.disabled = false;
  }

  disable(): void {
    this.disabled = true;
  }

  onChange: (value: T[]) => {};
  onTouched: () => {};

  protected changed(): void {
    super.changed();
    if (this.onChange) {
      this.onChange((this.selection || []).map((item) => this.transformer(item)));
    }
    this.touched();
  }

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: T[]): void {
    this.selection = value;
  }

  registerOnChange(fn: (value: T[]) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
