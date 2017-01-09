import {Toggle} from './toggle';

import {expect} from 'chai';

describe('Toggle', ()=> {
  it('initial state: default to off', () => {
    const toggle = new Toggle();
    expect(toggle.off).to.be.ok;
    expect(toggle.on).to.not.be.ok;
  });
  it('initial state: on', () => {
    const toggle = new Toggle(Toggle.OFF);
    expect(toggle.on).to.not.be.ok;
  });
  it('on', () => {
    const toggle = new Toggle();
    toggle.on = true;
    expect(toggle.on).to.be.ok;
    toggle.on = false;
    expect(toggle.on).to.not.be.ok;
  });
  it('turn on', () => {
    const toggle = new Toggle();
    toggle.turnOn();
    expect(toggle.on).to.be.ok;
  });
  it('turn off', ()=> {
    const toggle = new Toggle();
    toggle.turnOn();
    toggle.turnOff();
    expect(toggle.on).to.not.be.ok;
  });
  it('open', () => {
    const toggle = new Toggle();
    toggle.open();
    expect(toggle.on).to.be.ok;
  });
  it('close', ()=> {
    const toggle = new Toggle();
    toggle.open();
    toggle.close();
    expect(toggle.on).to.not.be.ok;
  });
  it('toggle', () => {
    const toggle = new Toggle();
    expect(toggle.on).to.not.be.ok;
    toggle.toggle();
    expect(toggle.on).to.be.ok;
    toggle.toggle();
    expect(toggle.on).to.not.be.ok;
  });
});
