import { ControlValueAccessor } from '@angular/forms';

export type OnValueChange<T> = (value: T) => void;
export type OnControlTouched = () => void;

export class BaseValueAccessor<T> implements ControlValueAccessor {
  value: T;

  writeValue(obj: T): void {
    this.value = obj;
  }

  private _onChange: OnValueChange<T>;

  changed(): void {
    if (this._onChange) {
      this._onChange(this.value);
    }
  }

  registerOnChange(fn: OnValueChange<T>): void {
    this._onChange = fn;
  }

  private _onTouched: OnControlTouched;

  registerOnTouched(fn: OnControlTouched): void {
    this._onTouched = fn;
  }

  touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  disabled = false;

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
