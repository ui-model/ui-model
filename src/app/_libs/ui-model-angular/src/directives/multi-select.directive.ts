import {Directive, forwardRef, Input} from '@angular/core';
import {MultiSelect, Transformer} from 'ui-model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
  }

  writeValue(value: T[]): void {
    this.selection = value;
  }

  onChange: (value: T[]) => void;

  registerOnChange(callback: (value: T[]) => void): void {
    this.onChange = callback;
  }

  onTouched: () => void;

  registerOnTouched(callback: () => void): void {
    this.onTouched = callback;
  }
}
