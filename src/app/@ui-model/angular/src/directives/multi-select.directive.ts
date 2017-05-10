import {Directive, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import {MultiSelectValueAccessor} from '../accessors/multi-select.value-accessor';

const MULTI_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectDirective),
  multi: true,
};

@Directive({
  selector: '[uiMultiSelect]',
  inputs: ['options:uiMultiSelect', 'transformer:uiMultiSelectTransformer', 'valueField'],
  exportAs: 'uiMultiSelect',
  providers: [MULTI_SELECT_VALUE_ACCESSOR],
})
export class MultiSelectDirective<T> extends MultiSelectValueAccessor<T> {
}
