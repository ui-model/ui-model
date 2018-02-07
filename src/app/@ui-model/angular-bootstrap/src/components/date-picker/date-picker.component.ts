import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Toggle } from '@ui-model/core';

@Component({
  selector: 'ui-date-picker',
  template: require('./date-picker.component.html'),
  styles: [require('./date-picker.component.scss')],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DatePickerComponent},
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  constructor() {
  }

  toggle = new Toggle();

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

  private _onChange: (value: Date) => void;

  changed(): void {
    if (this._onChange) {
      this._onChange(this.value);
    }
  }

  registerOnChange(fn: (value: Date) => void): void {
    this._onChange = fn;
  }

  private _onTouched: () => void;

  protected touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  @Input() disabled = false;

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
