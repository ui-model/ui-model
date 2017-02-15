import {ControlValueAccessor} from "@angular/forms";
import {Calendar} from "ui-model";

export class CalendarValueAccessor extends Calendar implements ControlValueAccessor {
  constructor() {
    super();
  }

  value: Date;

  private onChange: (value: Date) => void;

  changed(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
  private onTouched: () => void;

  writeValue(value: Date): void {
    if (value !== this.value) {

    }
  }

  registerOnChange(fn: Date): void {
  }

  registerOnTouched(fn: Date): void {
  }

}
