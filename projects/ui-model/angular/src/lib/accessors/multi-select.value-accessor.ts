import { ControlValueAccessor } from '@angular/forms';
import { MultiSelect } from '@ui-model/common';

export class MultiSelectValueAccessor<T> extends MultiSelect<T> implements ControlValueAccessor {

  constructor() {
    super();
  }

  disabled = false;
  onChange: (value: T[]) => {};
  onTouched: () => {};

  enable(): void {
    this.disabled = false;
  }

  disable(): void {
    this.disabled = true;
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

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

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
}
