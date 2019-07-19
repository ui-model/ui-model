import { fakeAsync, tick } from '@angular/core/testing';
import { CountDown } from './count-down';

describe('Count down', () => {
  it('constructor', () => {
    const countDown = new CountDown();
    expect(countDown.value).toEqual(0);
    expect(countDown.interval).toEqual(1000);
    expect(countDown.initialValue).toEqual(0);
  });
  it('running', () => {
    const countDown = new CountDown().setInitialValue(10);
    countDown.start();
    expect(countDown.running).toBeTruthy();
    countDown.stop();
    expect(countDown.running).toBeFalsy();
  });
  it('ticks', fakeAsync(() => {
    const countDown = new CountDown().setInitialValue(10);
    countDown.start();
    tick(1000);
    expect(countDown.value).toEqual(9);
    tick(9000);
    expect(countDown.value).toEqual(0);
  }));
});
