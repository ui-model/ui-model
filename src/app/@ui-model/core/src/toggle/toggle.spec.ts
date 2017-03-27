import {Toggle} from './toggle';

describe('Toggle', () => {
  it('initial state: default to off', () => {
    const toggle = new Toggle();
    expect(toggle.isOff).toBeTruthy();
    expect(toggle.isOn).toBeFalsy();
  });
  it('changes', (done) => {
    const toggle = new Toggle().setIsOn(Toggle.OFF);
    toggle.changes.subscribe((value) => {
      expect(value.isOn).toBeTruthy();
      done();
    });
    toggle.toggle();
  });
  it('initial state: on', () => {
    const toggle = new Toggle().setIsOn(Toggle.ON);
    expect(toggle.isOn).toBeTruthy();
  });
  it('set state with isOn', () => {
    const toggle = new Toggle();
    toggle.isOn = true;
    expect(toggle.isOn).toBeTruthy();
    expect(toggle.isOff).toBeFalsy();
    toggle.isOn = false;
    expect(toggle.isOn).toBeFalsy();
    expect(toggle.isOff).toBeTruthy();
  });
  it('set state with isOff', () => {
    const toggle = new Toggle();
    toggle.isOff = true;
    expect(toggle.isOff).toBeTruthy();
    toggle.isOff = false;
    expect(toggle.isOff).toBeFalsy();
  });
  it('isOn and isOff is opposite to each other', () => {
    const toggle = new Toggle();
    toggle.isOff = true;
    expect(toggle.isOn).toBeFalsy();
    toggle.isOff = false;
    expect(toggle.isOn).toBeTruthy();
    toggle.isOn = false;
    expect(toggle.isOff).toBeTruthy();
    toggle.isOn = true;
    expect(toggle.isOff).toBeFalsy();
  });
  it('turn on', () => {
    const toggle = new Toggle();
    toggle.turnOn();
    expect(toggle.isOn).toBeTruthy();
  });
  it('turn off', () => {
    const toggle = new Toggle();
    toggle.turnOn();
    toggle.turnOff();
    expect(toggle.isOn).toBeFalsy();
  });
  it('open', () => {
    const toggle = new Toggle();
    toggle.open();
    expect(toggle.isOn).toBeTruthy();
  });
  it('close', () => {
    const toggle = new Toggle();
    toggle.open();
    toggle.close();
    expect(toggle.isOn).toBeFalsy();
  });
  it('show', () => {
    const toggle = new Toggle();
    toggle.show();
    expect(toggle.isOn).toBeTruthy();
  });
  it('hide', () => {
    const toggle = new Toggle();
    toggle.show();
    toggle.hide();
    expect(toggle.isOn).toBeFalsy();
  });
  it('toggle', () => {
    const toggle = new Toggle();
    expect(toggle.isOn).toBeFalsy();
    toggle.toggle();
    expect(toggle.isOn).toBeTruthy();
    toggle.toggle();
    expect(toggle.isOn).toBeFalsy();
  });
});
