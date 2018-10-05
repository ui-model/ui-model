import { Coordinate } from './coordinate';

const precision = 0.001;

describe('Coordinate', () => {
  it('polar to cartesian', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    expect(coordinate.x).toBeCloseTo(20, precision);
    expect(coordinate.y).toBeCloseTo(10, precision);
  });
  it('set x/y will change radius and theta', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.x = -20;
    expect(coordinate.radius).toBeCloseTo(30, precision);
    expect(coordinate.degree).toBeCloseTo(180, precision);
  });
  it('move will change x/y/theta', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.move(0, 10);
    expect(coordinate.x).toBeCloseTo(20, precision);
    expect(coordinate.y).toBeCloseTo(20, precision);
    expect(coordinate.degree).toBeCloseTo(45, precision);
  });
  it('translate will change cx/cy and theta, but keep radius/x/y', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.translate(10, 10);
    expect(coordinate.x).toBeCloseTo(20, precision);
    expect(coordinate.y).toBeCloseTo(10, precision);
    expect(coordinate.radius).toBeCloseTo(10, precision);
    expect(coordinate.degree).toBeCloseTo(-90, precision);
  });

  it('rotate will change x/y/theta, but keep radius/cx/cy', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.rotateByDegree(90);
    expect(coordinate.degree).toBeCloseTo(90, precision);
    expect(coordinate.x).toBeCloseTo(10, precision);
    expect(coordinate.y).toBeCloseTo(20, precision);
  });
});
