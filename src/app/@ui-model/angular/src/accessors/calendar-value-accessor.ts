import {ControlValueAccessor} from '@angular/forms';
import {Calendar} from '@ui-model/calendar';

export class CalendarValueAccessor extends Calendar implements ControlValueAccessor {
  constructor() {
    super();
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

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private onChange: (value: Date) => {};
  private onTouched: () => {};
}
