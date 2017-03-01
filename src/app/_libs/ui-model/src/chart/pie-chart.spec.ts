import {expect} from 'chai';
import {PieChart} from './pie-chart';

describe('PieChart', () => {
  it('constructor', () => {
    const chart = new PieChart();
    chart.cx = 125;
    chart.cy = 80;
    chart.rx = 45;
    chart.ry = 45;
    expect(chart.toPath()).to.eql(`M 80,80
A 45 45, 0 0 0, 125 125
L 125,80`);
  });
});
