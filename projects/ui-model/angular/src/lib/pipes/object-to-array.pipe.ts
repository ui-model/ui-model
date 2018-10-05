import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'lodash';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(value: { [key: string]: any }): { key: string, value: any }[] {
    return map(value, (v, k) => ({ key: k, value: v }));
  }

}
