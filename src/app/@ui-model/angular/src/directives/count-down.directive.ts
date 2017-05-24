import { Directive, EventEmitter, Output } from '@angular/core';
import { CountDown } from '@ui-model/core';

@Directive({
  selector: '[uiCountDown]',
  exportAs: 'uiCountDown',
  inputs: [
    'initialValue',
    'interval',
  ],
})
export class CountDownDirective extends CountDown {
  constructor() {
    super();
    this.stopped.subscribe(() => {
      this.done.next();
    });
  }

  @Output() done = new EventEmitter<void>();
}
