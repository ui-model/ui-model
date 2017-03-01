import {Directive, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {Select} from 'ui-model';

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  inputs: ['selection'],
})
export class SelectDirective<T> extends Select<T> implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  @Output() selectionChange = new EventEmitter();

  sub: any;

  ngOnInit(): void {
    this.sub = this.changes.subscribe((selection) => {
      this.selectionChange.emit(selection);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
