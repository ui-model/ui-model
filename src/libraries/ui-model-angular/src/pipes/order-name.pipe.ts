import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder} from 'ui-model';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {
  transform(value: SortOrder, prefix: string): string {
    if (!value) {
      return '';
    }
    return (prefix || '') + SortOrder[value].toLowerCase();
  }
}
