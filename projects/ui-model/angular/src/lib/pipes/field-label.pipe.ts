import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';
import { PropertyMetadata } from '../decorators/form-maker';
import { NameMapper } from '../services/name-mapper.service';

@Pipe({
  name: 'fieldLabel',
})
export class FieldLabelPipe implements PipeTransform {

  constructor(private mapper: NameMapper) {
  }

  transform(value: PropertyMetadata): string {
    if (!value) {
      return '';
    }
    if (isUndefined(value.label)) {
      return this.mapper.toNatureCase(value.name);
    } else {
      return value.label;
    }
  }
}
