import {Directive, EventEmitter, Output} from '@angular/core';
import {Select} from 'ui-model';

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  inputs: ['selection'],
})
export class SelectDirective<T> extends Select<T> {
  constructor() {
    super();
  }

  @Output() selectionChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    this.selectionChange.emit(this.selection);
  }
}
