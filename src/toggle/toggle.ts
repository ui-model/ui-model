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

  get off() {
    return !this.on;
  }

  turnOn(): void {
    this.turnTo(true);
  }

  turnOff(): void {
    this.turnTo(false);
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
