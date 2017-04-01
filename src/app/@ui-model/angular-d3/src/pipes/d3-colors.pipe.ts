import {Pipe, PipeTransform} from '@angular/core';
import {schemeCategory10, schemeCategory20} from 'd3';

@Pipe({
  name: 'd3Colors',
})
export class D3ColorsPipe implements PipeTransform {

  transform(index: number, maxCount: number = 10): string {
    if (maxCount <= 10 && index < 10) {
      return schemeCategory10[index];
    } else {
      return schemeCategory20[index % 20];
    }
  }

}
