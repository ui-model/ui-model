import { Pipe, PipeTransform } from '@angular/core';
import { FieldErrorFormatter } from '../services/field-error-formatter.service';

@Pipe({
  name: 'fieldErrorMessage',
})
export class FieldErrorMessagePipe implements PipeTransform {

  constructor(private formatter: FieldErrorFormatter) {
  }

  transform({key, value}: { key: string, value: any }, customMessages: { [key: string]: string } = {}): string {
    const template = customMessages[key] || this.formatter.lookup(key, value);
    return this.formatter.format(template, {key, value});
  }
}
