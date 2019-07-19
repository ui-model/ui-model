import { Component, Input } from '@angular/core';
import { Pagination } from '@ui-model/common';

@Component({
  selector: 'ui-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent {
  @Input() showBrief = true;
  @Input() showPrevNext = true;
  @Input() showFirstLast = true;
  @Input() pager: Pagination;
}
