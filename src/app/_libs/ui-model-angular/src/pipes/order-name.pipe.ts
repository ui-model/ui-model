import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder, isUndefined} from 'ui-model';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {
  transform(value: SortOrder, prefix = ''): string {
    if (isUndefined(value) || isUndefined(SortOrder[value])) {
      return '';
    }
    return prefix + SortOrder[value].toLowerCase();
  }
}
