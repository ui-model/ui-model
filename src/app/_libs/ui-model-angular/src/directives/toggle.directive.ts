import {Directive, Output, EventEmitter} from '@angular/core';
import {Toggle} from 'ui-model';

@Directive({
  selector: '[uiToggle]',
  inputs: ['isOn', 'isOff'],
  exportAs: 'uiToggle'
})
export class ToggleDirective extends Toggle {
  constructor() {
    super();
  }

  @Output() isOnChange = new EventEmitter();
  @Output() isOffChange = new EventEmitter();

  protected changed(): void {
    super.changed();
    this.isOnChange.emit(this.isOn);
    this.isOffChange.emit(this.isOff);
  }
}
