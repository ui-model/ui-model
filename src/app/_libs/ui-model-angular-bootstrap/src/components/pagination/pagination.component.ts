import {Component, OnInit, Input} from '@angular/core';
import {Pagination} from 'ui-model';

@Component({
  selector: 'ui-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() showBrief = true;
  @Input() showPrevNext = true;
  @Input() showFirstLast = true;
  @Input() pager: Pagination;

  constructor() {

  }

  ngOnInit() {
  }

}
