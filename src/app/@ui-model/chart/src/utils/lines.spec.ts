import { lines } from './lines';
import { Point } from '@ui-model/common';

describe('Line Chart', () => {
  it('convert points to point pairs', () => {
    const data = [new Point(0, 1), new Point(1, 2), new Point(2, 0)];
    expect(lines(data)).toEqual([{x1: 0, y1: 1, x2: 1, y2: 2}, {x1: 1, y1: 2, x2: 2, y2: 0}]);
  });
});
