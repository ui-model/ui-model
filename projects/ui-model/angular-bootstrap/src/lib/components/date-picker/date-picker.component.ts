import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Toggle } from '@ui-model/core';

@Component({
  selector: 'ui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DatePickerComponent },
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  constructor() {
  }

  toggle = new Toggle();
  @Input() disabled = false;
  private _onChange: (value: Date) => void;
  private _onTouched: () => void;

  private _value: Date;

  get value(): Date {
    return this._value;
  }

  set value(value: Date) {
    this._value = value;
  }

  ngOnInit(): void {
  }

  writeValue(obj: Date): void {
    this.value = obj;
  }

  changed(): void {
    if (this._onChange) {
      this._onChange(this.value);
    }
  }

  registerOnChange(fn: (value: Date) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }
}
