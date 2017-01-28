import {expect} from 'chai';
import {Toggle} from './toggle';

describe('Toggle', () => {
  it('initial state: default to off', () => {
    const toggle = new Toggle();
    expect(toggle.isOff).to.be.ok;
    expect(toggle.isOn).to.not.be.ok;
  });
  it('changes', (done) => {
    const toggle = new Toggle(Toggle.OFF);
    toggle.changes.subscribe((value) => {
      expect(value).to.be.true;
      done();
    });
    toggle.toggle();
  });
  it('initial state: on', () => {
    const toggle = new Toggle(Toggle.ON);
    expect(toggle.isOn).to.be.ok;
  });
  it('set state with isOn', () => {
    const toggle = new Toggle();
    toggle.isOn = true;
    expect(toggle.isOn).to.be.ok;
    expect(toggle.isOff).to.not.be.ok;
    toggle.isOn = false;
    expect(toggle.isOn).to.not.be.ok;
    expect(toggle.isOff).to.be.ok;
  });
  it('set state with isOff', () => {
    const toggle = new Toggle();
    toggle.isOff = true;
    expect(toggle.isOff).to.be.ok;
    toggle.isOff = false;
    expect(toggle.isOff).to.not.be.ok;
  });
  it('isOn and isOff is opposite to each other', () => {
    const toggle = new Toggle();
    toggle.isOff = true;
    expect(toggle.isOn).to.not.be.ok;
    toggle.isOff = false;
    expect(toggle.isOn).to.be.ok;
    toggle.isOn = false;
    expect(toggle.isOff).to.be.ok;
    toggle.isOn = true;
    expect(toggle.isOff).to.not.be.ok;
  });
  it('turn on', () => {
    const toggle = new Toggle();
    toggle.turnOn();
    expect(toggle.isOn).to.be.ok;
  });
  it('turn off', () => {
    const toggle = new Toggle();
    toggle.turnOn();
    toggle.turnOff();
    expect(toggle.isOn).to.not.be.ok;
  });
  it('open', () => {
    const toggle = new Toggle();
    toggle.open();
    expect(toggle.isOn).to.be.ok;
  });
  it('close', () => {
    const toggle = new Toggle();
    toggle.open();
    toggle.close();
    expect(toggle.isOn).to.not.be.ok;
  });
  it('toggle', () => {
    const toggle = new Toggle();
    expect(toggle.isOn).to.not.be.ok;
    toggle.toggle();
    expect(toggle.isOn).to.be.ok;
    toggle.toggle();
    expect(toggle.isOn).to.not.be.ok;
  });
});
