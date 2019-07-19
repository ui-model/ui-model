import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from '@ui-model/core';

@Pipe({
  name: 'isNotEmpty',
})
export class IsNotEmptyPipe implements PipeTransform {
  transform(value: any): boolean {
    return !isEmpty(value);
  }
}
