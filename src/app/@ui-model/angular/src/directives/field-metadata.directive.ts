import { Directive, Input } from '@angular/core';
import { FieldMetadata } from '@ui-model/angular';

@Directive({
  selector: '[uiFieldMetadata]',
})
export class FieldMetadataDirective implements FieldMetadata {

  constructor() {
  }

  @Input('uiFieldMetadata') meta: FieldMetadata;

}
