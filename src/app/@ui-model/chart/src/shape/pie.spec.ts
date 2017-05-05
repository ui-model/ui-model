import { Pie } from './pie';

describe('Pie', () => {
  it('negative arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(-0.5).setEndPercent(0);
    expect(chart.path).toEqual(`M 0,100.0000046
A 100 100, 0 1 1, 200 100
L 100,100Z`);
  });

  it('zero arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(0).setEndPercent(0);
    expect(chart.path).toEqual(`M 200,100
A 100 100, 0 0 1, 200 100
L 100,100Z`);
  });
  it('small arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(0).setEndPercent(0.5);
    expect(chart.path).toEqual(`M 200,100
A 100 100, 0 1 1, 0 99.9999954
L 100,100Z`);
  });
  it('large arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(0).setEndPercent(0.75);
    expect(chart.path).toEqual(`M 200,100
A 100 100, 0 1 1, 100.000002 0
L 100,100Z`);
  });
  it('full arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(0).setEndPercent(1);
    expect(chart.path).toEqual(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
  it('negative full arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(-1).setEndPercent(1);
    expect(chart.path).toEqual(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
  it('positive full arc', () => {
    const chart = new Pie().setRadius(100).setCx(100).setCy(100).setBeginPercent(0).setEndPercent(1.2);
    expect(chart.path).toEqual(`M 200 100
A 100 100, 0 1 0, 200 100.001
Z`);
  });
});
