import { Pipe, PipeTransform } from '@angular/core';
import { TableSorter } from '@ui-model/common';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], sorter: TableSorter): any[] {
    if (!sorter || !sorter.field) {
      return value;
    }
    return value.sort(sorter.compare.bind(sorter));
  }
}
