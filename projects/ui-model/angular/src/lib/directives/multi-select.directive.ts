import { Directive, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Transformer } from '@ui-model/core';
import { MultiSelectValueAccessor } from '../accessors/multi-select.value-accessor';

@Directive({
  selector: '[uiMultiSelect]',
  exportAs: 'uiMultiSelect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MultiSelectDirective,
    multi: true,
  }],
})
export class MultiSelectDirective<T> extends MultiSelectValueAccessor<T> {
  @Input('uiMultiSelect') options: T[];
  @Input('uiMultiSelectTransformer') transformer: Transformer<T, any>;
  @Input() valueField: string;
}
