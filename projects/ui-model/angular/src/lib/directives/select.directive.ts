import { Directive, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Transformer } from '@ui-model/core';
import { SelectValueAccessor } from '../accessors/select.value-accessor';

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectDirective,
    multi: true,
  }],
})
export class SelectDirective<T> extends SelectValueAccessor<T> {
  @Input('uiSelectTransformer') transformer: Transformer<T, any>;
  @Input() valueField: string;
}
