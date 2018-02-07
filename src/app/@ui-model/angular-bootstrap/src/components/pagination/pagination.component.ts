import { Component, Input } from '@angular/core';
import { Pagination } from '@ui-model/core';

@Component({
  selector: 'ui-pagination',
  template: require('./pagination.component.html'),
  styles: [require('./pagination.component.scss')],
})
export class PaginationComponent {
  @Input() showBrief = true;
  @Input() showPrevNext = true;
  @Input() showFirstLast = true;
  @Input() pager: Pagination;
}
