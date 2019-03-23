import { ControlValueAccessor } from '@angular/forms';

export type OnValueChange<T> = (value: T) => void;
export type OnControlTouched = () => void;

export class BaseValueAccessor<T> implements ControlValueAccessor {
  value: T;
  disabled = false;
  private _onChange: OnValueChange<T>;
  private _onTouched: OnControlTouched;

  writeValue(obj: T): void {
    this.value = obj;
  }

  changed(): void {
    if (this._onChange) {
      this._onChange(this.value);
    }
  }

  registerOnChange(fn: OnValueChange<T>): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: OnControlTouched): void {
    this._onTouched = fn;
  }

  touched(): void {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
