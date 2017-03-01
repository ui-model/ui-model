import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class Toggle {
  static readonly ON = true;
  static readonly OFF = false;

  constructor(private _isOn: boolean = Toggle.OFF) {
  }

  get changes(): Observable<boolean> {
    return this._changes;
  }

  protected changed(): void {
    this._changes.next(this._isOn);
  }

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

  private _changes = new Subject();

}
