import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times',
})
export class TimesPipe<T> implements PipeTransform {

  transform(value: number): T[] {
    const result = [];
    for (let i = 0; i < value; ++i) {
      result.push(i);
    }
    return result;
  }

}
