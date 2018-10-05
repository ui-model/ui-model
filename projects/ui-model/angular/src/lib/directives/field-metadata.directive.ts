import { Directive, Input } from '@angular/core';
import { PropertyMetadata } from '../decorators/form-maker';

@Directive({
  selector: '[uiFieldMetadata]',
})
export class FieldMetadataDirective {

  constructor() {
  }

  @Input('uiFieldMetadata') meta: PropertyMetadata;

}
