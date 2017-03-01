import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import MomentInput = moment.MomentInput;

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  transform(value: MomentInput, format?: string): string {
    return moment(value).format(format);
  }

}
