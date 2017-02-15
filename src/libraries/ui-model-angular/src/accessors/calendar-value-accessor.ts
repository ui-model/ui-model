import {ControlValueAccessor} from "@angular/forms";
import {Calendar} from "ui-model";

export class CalendarValueAccessor extends Calendar implements ControlValueAccessor {
  constructor() {
    super();
  }

  private onChange: (value: Date) => void;

  protected changed(): void {
    super.changed();
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  private onTouched: () => void;

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
