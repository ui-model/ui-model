import {lines} from './lines';
describe('Line Chart', () => {
  it('convert points to point pairs', () => {
    const data = [{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 0}];
    expect(lines(data)).toEqual([{x1: 0, y1: 1, x2: 1, y2: 2}, {x1: 1, y1: 2, x2: 2, y2: 0}]);
  });
});
