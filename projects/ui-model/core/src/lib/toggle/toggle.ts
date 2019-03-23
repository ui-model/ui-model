import { BaseModel } from '@ui-model/common';

export class Toggle extends BaseModel {

  get isOn(): boolean {
    return this._isOn;
  }

  set isOn(value: boolean) {
    if (value !== this._isOn) {
      this._isOn = value;
      this.changed();
    }
  }

  get isOff(): boolean {
    return !this.isOn;
  }

  set isOff(value: boolean) {
    this.isOn = !value;
  }

  private _isOn = Toggle.OFF;

  setIsOn(value: boolean): this {
    this.isOn = value;
    return this;
  }

  setIsOff(value: boolean): this {
    this.isOff = value;
    return this;
  }

  turnOn(): void {
    this.turnTo(true);
  }

  turnOff(): void {
    this.turnTo(false);
  }

  turnTo(state: boolean): void {
    if (this.isOn !== state) {
      this.isOn = state;
    }
  }

  toggle(): void {
    this.turnTo(!this.isOn);
  }

  open(): void {
    this.turnOn();
  }

  close(): void {
    this.turnOff();
  }

  show(): void {
    this.turnOn();
  }

  hide(): void {
    this.turnOff();
  }
  static readonly ON = true;
  static readonly OFF = false;
}
