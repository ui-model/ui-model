import { ControlValueAccessor } from '@angular/forms';
import { Calendar } from '@ui-model/common';

export class CalendarValueAccessor extends Calendar implements ControlValueAccessor {

  constructor() {
    super();
  }

  private onChange: (value: Date) => {};
  private onTouched: () => {};

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected changed(): void {
    super.changed();
    if (this.onChange) {
      this.onChange(this.value);
    }
    this.touched();
  }

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }
}
