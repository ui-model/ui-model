import {Component, OnInit, Input} from '@angular/core';
import {Pagination} from 'ui-model';

@Component({
  selector: 'ui-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() showBrief: boolean = true;
  @Input() showPrevNext: boolean = true;
  @Input() showFirstLast: boolean = true;
  @Input() pager: Pagination;

  constructor() {

  }

  ngOnInit() {
  }

}
