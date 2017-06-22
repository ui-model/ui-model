import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { MomentInput } from 'moment';

@Pipe({
  name: 'isValidDate',
})
export class IsValidDatePipe implements PipeTransform {

  transform(value: MomentInput): boolean {
    return moment(value).isValid();
  }

}
