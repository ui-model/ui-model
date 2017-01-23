import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class Toggle {
  constructor(private _isOn: boolean = Toggle.OFF) {
  }

  private _changes: Subject<boolean> = new Subject();

  get changes(): Observable<boolean> {
    return this._changes;
  }

  changed(): void {
    this._changes.next(this._isOn);
  }

  static readonly ON: boolean = true;
  static readonly OFF: boolean = false;

  get isOn(): boolean {
    return this._isOn;
  }

  set isOn(value: boolean) {
    this._isOn = value;
    this.changed();
  }

  get isOff(): boolean {
    return !this.isOn;
  }

  set isOff(value: boolean) {
    this.isOn = !value;
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
    if (this.isOn !== state) {
      this.isOn = state;
    }
  }

  toggle(): void {
    this.turnTo(!this.isOn);
  }
}
