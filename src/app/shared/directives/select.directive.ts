import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Select} from 'ui-model';

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect'
})
export class SelectDirective<T> extends Select<T> {

  @Input('uiSelect') options: T[];

  constructor() {
    super();
  }
}
