import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@ui-model/common';

@Directive({
  selector: '[uiPagination]',
  exportAs: 'uiPagination',
})
export class PaginationDirective extends Pagination {

  constructor() {
    super();
  }

  @Input() index: number;
  @Input() totalItems: number;
  @Input() size: number;
  @Input() viewport: number;

  @Output() indexChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    if (this.indexChange) {
      this.indexChange.emit(this.index);
    }
  }
}
