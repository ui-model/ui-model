import {Directive, EventEmitter, Output} from '@angular/core';
import {Select} from 'ui-model';

@Directive({
  selector: '[uiSelect]',
  exportAs: 'uiSelect',
  inputs: ['selection:uiSelect'],
})
export class SelectDirective<T> extends Select<T> {
  constructor() {
    super();
  }

  @Output() uiSelectChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    this.uiSelectChange.emit(this.selection);
  }
}
