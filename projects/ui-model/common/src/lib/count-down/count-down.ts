import { BaseModel } from '@ui-model/core';
import { interval, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

export class CountDown extends BaseModel {
  initialValue = 0;
  interval = 1000;
  stopped = new Subject<void>();
  private sub: Subscription;

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

  setInitialValue(value: number): this {
    this.initialValue = value;
    return this;
  }

  start(): void {
    this.reset();
    this.value = this.initialValue;
    this.running = true;
    this.sub = interval(this.interval).pipe(
      take(this.initialValue),
    ).subscribe({
      next: () => {
        this.value--;
      },
      complete: () => {
        this.running = false;
      },
    });
  }

  stop(): void {
    this.running = false;
  }

  reset(): void {
    this.stop();
  }
}
