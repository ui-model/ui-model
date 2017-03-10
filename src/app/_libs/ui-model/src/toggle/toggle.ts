import {StateListener} from '../utils/state-listener';
import {Ui} from '../common/ui';

export class Toggle extends Ui {
  static readonly ON = true;
  static readonly OFF = false;

  constructor(private _isOn: boolean = Toggle.OFF, stateListener?: StateListener, stateKey?: string) {
    super(stateListener, stateKey);
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
}
