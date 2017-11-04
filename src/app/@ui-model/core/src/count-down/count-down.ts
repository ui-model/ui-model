import { Stateful } from '@ui-model/common';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { interval } from 'rxjs/observable/interval';

export class CountDown extends Stateful {
  initialValue = 0;

  setInitialValue(value: number): this {
    this.initialValue = value;
    return this;
  }

  interval = 1000;

  private _value = 0;
  get value(): number {
    return this._value;
  }

  set value(value: number) {
    if (this._value !== value) {
      this._value = value;
      this.changed();
    }
  }

  stopped = new Subject<void>();

  private _running = false;

  get running(): boolean {
    return this._running;
  }

  set running(value: boolean) {
    if (this._running !== value) {
      this._running = value;
      if (!value) {
        this.value = 0;
        this.stopped.next();
      }
    }
  }

  private sub: Subscription;

  start(): void {
    this.reset();
    this.value = this.initialValue;
    this.running = true;
    this.sub = interval(this.interval).pipe(
      take(this.initialValue),
    ).subscribe(() => {
      this.value--;
    }, null, () => {
      this.running = false;
    });
  }

  stop(): void {
    this.running = false;
  }

  reset(): void {
    this.stop();
  }
}
