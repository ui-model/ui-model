import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectValueAccessor } from '../accessors/select.value-accessor';

const SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectDirective),
  multi: true,
};

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  inputs: ['transformer:uiSelectTransformer', 'valueField'],
  providers: [SELECT_VALUE_ACCESSOR],
})
export class SelectDirective<T> extends SelectValueAccessor<T> {
}
