import { Directive, Input } from '@angular/core';
import { FieldMetadata } from '../decorators/form-maker/field-metadata';

@Directive({
  selector: '[uiFieldMetadata]',
})
export class FieldMetadataDirective implements FieldMetadata {

  constructor() {
  }

  @Input('uiFieldMetadata') meta: FieldMetadata;

}
