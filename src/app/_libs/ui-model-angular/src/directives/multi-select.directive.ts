import { Directive, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { MultiSelect } from 'ui-model';
@Directive({
  selector: '[uiMultiSelect]',
  inputs: ['allSelected', 'selection']
})
export class MultiSelectDirective<T> extends MultiSelect<T> implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  @Output() selectionChange: EventEmitter<T[]> = new EventEmitter();
  @Output() allSelectedChange: EventEmitter<boolean> = new EventEmitter();

  sub: any;

  ngOnInit(): void {
    this.sub = this.changes.subscribe(() => {
      this.selectionChange.emit(this.selection);
      this.allSelectedChange.emit(this.allSelected);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
