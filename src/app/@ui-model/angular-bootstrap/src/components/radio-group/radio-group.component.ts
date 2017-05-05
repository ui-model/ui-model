import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select } from '@ui-model/core';

const RADIO_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};
@Component({
  selector: 'ui-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  providers: [RADIO_GROUP_VALUE_ACCESSOR],
})
export class RadioGroupComponent<T> extends Select<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  @Input() options: T[];

  onChange: (value: T) => {};
  onTouched: () => {};

  protected changed(): void {
    super.changed();
    if (this.onChange) {
      this.onChange(this.selection);
    }
    this.touched();
  }

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: T): void {
    this.select(value);
  }

  registerOnChange(fn: (value: T) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
