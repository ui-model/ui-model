import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Pager } from '@ui-model/common';

@Directive({
  selector: '[uiPager]',
  exportAs: 'uiPager',
})
export class PagerDirective extends Pager {

  constructor() {
    super();
  }

  @Input() index: number;
  @Input() totalItems: number;
  @Input() size: number;
  @Output() indexChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    this.indexChange.emit(this.index);
  }
}
