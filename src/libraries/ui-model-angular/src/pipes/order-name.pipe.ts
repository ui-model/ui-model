import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder} from 'ui-model';
import {isUndefined} from "util";

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {
  transform(value: SortOrder, prefix: string = ''): string {
    if (isUndefined(value) || isUndefined(SortOrder[value])) {
      return '';
    }
    return prefix + SortOrder[value].toLowerCase();
  }
}
