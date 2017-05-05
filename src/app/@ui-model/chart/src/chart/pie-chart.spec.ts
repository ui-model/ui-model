import { PieChart } from './pie-chart';

describe('PieChart', () => {
  it('pies', () => {
    const chart = new PieChart().setSerials([10, 10, 20]).setRadius(50).setCx(60).setCy(60);
    expect(chart.pies.map((pie) => pie.beginPercent)).toEqual([0, 0.25, 0.5]);
    expect(chart.pies.map((pie) => pie.endPercent)).toEqual([0.25, 0.5, 1]);
    expect(chart.cx).toEqual(60);
    expect(chart.cy).toEqual(60);
    expect(chart.radius).toEqual(50);
  });
});
