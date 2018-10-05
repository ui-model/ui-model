import { Pipe, PipeTransform } from '@angular/core';
import { format, parse } from 'date-fns';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  transform(value: string | Date, formatPattern?: string): string {
    return format(parse(value), formatPattern);
  }

}
