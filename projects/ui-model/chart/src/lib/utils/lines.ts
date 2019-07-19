import { isDefined, Point } from '@ui-model/core';

export class Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function lines(data: Point[]): Line[] {
  return data.map((point, index, points) => {
    const nextPoint = points[index + 1];
    if (nextPoint) {
      return {
        x1: point.x, y1: point.y,
        x2: nextPoint.x, y2: nextPoint.y,
      };
    }
  }).filter(isDefined);
}
