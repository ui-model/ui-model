import {Directive} from '@angular/core';
import {Toggle} from 'ui-model';

@Directive({
  selector: '[uiToggle]',
  inputs: ['on'],
  exportAs: 'uiToggle'
})
export class ToggleDirective extends Toggle {
  constructor() {
    super();
  }

}
