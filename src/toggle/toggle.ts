import {Subject} from 'rxjs/Subject';

export class Toggle extends Subject<boolean> {
  constructor(private _on: boolean = Toggle.OFF) {
    super();
  }

  static readonly ON: boolean = true;
  static readonly OFF: boolean = false;

  get on() {
    return this._on;
  }

  set on(value: boolean) {
    this._on = value;
  }

  get off() {
    return !this.on;
  }

  set off(value: boolean) {
    this.on = !value;
  }

  turnOn(): void {
    this.turnTo(true);
  }

  open(): void {
    this.turnOn();
  }

  turnOff(): void {
    this.turnTo(false);
  }

  close(): void {
    this.turnOff();
  }

  turnTo(state: boolean): void {
    if (this.on !== state) {
      this.next(state);
      this._on = state;
    }
  }

  toggle(): void {
    this.turnTo(!this.on);
  }
}
