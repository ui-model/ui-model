import { Pipe, PipeTransform } from '@angular/core';
import { FieldErrorMapper } from '../services/field-error-mapper.service';

@Pipe({
  name: 'fieldErrorMapper',
})
export class FieldErrorMapperPipe implements PipeTransform {

  constructor(private mapper: FieldErrorMapper) {
  }

  transform({ key }: { key: string }, customMessages: { [key: string]: string } = {}): string {
    return this.mapper.lookup(key, customMessages);
  }
}
