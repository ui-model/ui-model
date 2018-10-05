import { Pipe, PipeTransform } from '@angular/core';
import { schemeCategory10 } from 'd3';

@Pipe({
  name: 'd3Colors',
})
export class D3ColorsPipe implements PipeTransform {

  transform(index: number, maxCount: number = 10): string {
    return schemeCategory10[index];
  }

}
