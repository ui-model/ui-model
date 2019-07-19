import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CountDown } from '@ui-model/common';

@Directive({
  selector: '[uiCountDown]',
  exportAs: 'uiCountDown',
})
export class CountDownDirective extends CountDown {

  constructor() {
    super();
    this.stopped.subscribe(() => {
      this.done.next();
    });
  }

  @Input() initialValue: number;
  @Input() interval: number;
  @Output() done = new EventEmitter<void>();
}
