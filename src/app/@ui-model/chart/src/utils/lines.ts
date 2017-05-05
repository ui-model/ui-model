import { isDefined } from '@ui-model/common';
export function lines(data: { x: number, y: number }[]): { x1: number, y1: number, x2: number, y2: number }[] {
  return data.map((point, index, points) => {
    const nextPoint = points[index + 1];
    if (nextPoint) {
      return {
        x1: point.x,
        y1: point.y,
        x2: nextPoint.x,
        y2: nextPoint.y,
      };
    }
  }).filter(isDefined);
}
