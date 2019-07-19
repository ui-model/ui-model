import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, SortOrder } from '@ui-model/core';

@Pipe({
  name: 'orderName',
})
export class OrderNamePipe implements PipeTransform {
  transform(value: SortOrder, prefix: string = ''): string {
    if (isUndefined(value) || isUndefined(SortOrder[value])) {
      return '';
    }
    return prefix + SortOrder[value].toLowerCase();
  }
}
