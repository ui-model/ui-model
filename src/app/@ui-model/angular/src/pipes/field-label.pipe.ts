import { Pipe, PipeTransform } from '@angular/core';
import { NameMapper } from '../services/name-mapper.service';
import { FieldMetadata } from '../decorators/form-maker';

@Pipe({
  name: 'fieldLabel',
})
export class FieldLabelPipe implements PipeTransform {

  constructor(private mapper: NameMapper) {
  }

  transform(value: FieldMetadata): string {
    if (!value) {
      return '';
    }
    return value.label || this.mapper.toNatureCase(value.name);
  }

}
