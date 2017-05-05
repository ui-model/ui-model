import { Directive, forwardRef, Input } from '@angular/core';
import { Transformer } from '@ui-model/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelect } from '@ui-model/core';

const MULTI_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectDirective),
  multi: true,
};

@Directive({
  selector: '[uiMultiSelect]',
  inputs: ['options:uiMultiSelect'],
  exportAs: 'uiMultiSelect',
  providers: [MULTI_SELECT_VALUE_ACCESSOR],
})
export class MultiSelectDirective<T> extends MultiSelect<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  @Input('uiMultiSelectTransformer') transformer: Transformer<T, any>;

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

  writeValue(value: T[]): void {
    this.selection = value;
  }

  onChange: (value: T[]) => {};

  registerOnChange(callback: (value: T[]) => {}): void {
    this.onChange = callback;
  }

  onTouched: () => {};

  registerOnTouched(callback: () => {}): void {
    this.onTouched = callback;
  }
}
