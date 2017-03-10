import {expect} from 'chai';
import {Pie} from './pie';

describe('Pie', () => {
  it('negative arc', () => {
    const chart = new Pie(100, 100, 100, -0.5, 0);
    expect(chart.path).to.eql(`M 0,100.0000046
A 100 100, 0 1 1, 200 100
L 100,100Z`);
  });

  it('zero arc', () => {
    const chart = new Pie(100, 100, 100, 0, 0);
    expect(chart.path).to.eql(`M 200,100
A 100 100, 0 0 1, 200 100
L 100,100Z`);
  });
  it('small arc', () => {
    const chart = new Pie(100, 100, 100, 0, 0.5);
    expect(chart.path).to.eql(`M 200,100
A 100 100, 0 1 1, 0 99.9999954
L 100,100Z`);
  });
  it('large arc', () => {
    const chart = new Pie(100, 100, 100, 0, 0.75);
    expect(chart.path).to.eql(`M 200,100
A 100 100, 0 1 1, 100.000002 0
L 100,100Z`);
  });
  it('full arc', () => {
    const chart = new Pie(100, 100, 100, 0, 1);
    expect(chart.path).to.eql(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
  it('negative full arc', () => {
    const chart = new Pie(100, 100, 100, -1, 1);
    expect(chart.path).to.eql(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
  it('positive full arc', () => {
    const chart = new Pie(100, 100, 100, 0, 1.2);
    expect(chart.path).to.eql(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
});
