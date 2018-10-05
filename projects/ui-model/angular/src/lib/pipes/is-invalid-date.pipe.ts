import { Pipe, PipeTransform } from '@angular/core';
import { isValid, parse } from 'date-fns';

@Pipe({
  name: 'isInvalidDate',
})
export class IsInvalidDatePipe implements PipeTransform {

  transform(value: string | Date): boolean {
    if (value instanceof Date) {
      return !isValid(value);
    } else {
      return this.transform(parse(value));
    }
  }

}
