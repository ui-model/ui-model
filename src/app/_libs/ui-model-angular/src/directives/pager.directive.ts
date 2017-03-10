import {Directive, Output, EventEmitter} from '@angular/core';
import {Pager} from 'ui-model';

@Directive({
  selector: '[uiPager]',
  exportAs: 'uiPager',
  inputs: ['index', 'recordCount', 'size'],
})
export class PagerDirective extends Pager {
  constructor() {
    super();
  }

  @Output() indexChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    this.indexChange.emit(this.index);
  }
}
