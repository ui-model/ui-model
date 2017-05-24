import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[uiCountDown]',
  exportAs: 'uiCountDown',
})
export class CountDownDirective {
  constructor() {
  }

  @Input() initialValue: number;
  @Input() interval = 1000;
  @Output() done = new EventEmitter<void>();
  value = 0;

  running = false;

  sub: Subscription;

  start(): void {
    this.value = this.initialValue;
    this.running = true;
    this.sub = Observable.interval(this.interval)
      .take(this.initialValue)
      .subscribe(() => {
        this.value--;
      }, null, () => {
        this.running = false;
        this.done.emit();
      });
  }

  stop(): void {
    this.sub.unsubscribe();
    this.value = 0;
  }
}
