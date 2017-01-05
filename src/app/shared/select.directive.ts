import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Select} from 'ui-model';

@Directive({
  selector: '[uaSelect]',
  exportAs: 'select'
})
export class SelectDirective<T> extends Select<T> {

  @Input('uaSelect') options: T[];

  constructor() {
    super();
  }
}
