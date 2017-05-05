import { Directive, EventEmitter, Output } from '@angular/core';
import { Pagination } from '@ui-model/core';
@Directive({
  selector: '[uiPagination]',
  exportAs: 'uiPagination',
  inputs: ['index', 'totalItems', 'size', 'viewport'],
})
export class PaginationDirective extends Pagination {
  constructor() {
    super();
  }

  @Output() indexChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    if (this.indexChange) {
      this.indexChange.emit(this.index);
    }
  }
}
