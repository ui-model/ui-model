import {Directive, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Pagination} from 'ui-model';
@Directive({
  selector: '[uiPagination]',
  exportAs: 'uiPagination',
  inputs: ['index', 'totalItems', 'size', 'viewport'],
})
export class PaginationDirective extends Pagination implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  @Output() indexChange = new EventEmitter();

  sub: any;

  ngOnInit(): void {
    this.sub = this.changes.subscribe((index) => {
      this.indexChange.emit(index);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
