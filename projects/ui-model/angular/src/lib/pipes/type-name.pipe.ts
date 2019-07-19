import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '@ui-model/core';

@Pipe({
  name: 'typeName',
})
export class TypeNamePipe implements PipeTransform {
  transform(value: DataType, prefix: string): string {
    if (!value) {
      return '';
    }
    return (prefix || '') + DataType[value].toLowerCase();
  }

}
