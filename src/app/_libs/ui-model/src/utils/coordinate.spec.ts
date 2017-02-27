import {expect} from "chai";
import {Coordinate} from "./coordinate";

const Precision = 0.001;

describe('Coordinate', () => {
  it('polar to cartesian', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    expect(coordinate.x).closeTo(20, Precision);
    expect(coordinate.y).closeTo(10, Precision);
  });
  it('set x/y will change radius and theta', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.x = -20;
    expect(coordinate.radius).closeTo(30, Precision);
    expect(coordinate.degree).closeTo(180, Precision);
  });
  it('move will change x/y/theta', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.move(0, 10);
    expect(coordinate.x).closeTo(20, Precision);
    expect(coordinate.y).closeTo(20, Precision);
    expect(coordinate.degree).closeTo(45, Precision);
  });
  it('translate will change cx/cy and theta, but keep radius/x/y', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.translate(10, 10);
    expect(coordinate.x).closeTo(20, Precision);
    expect(coordinate.y).closeTo(10, Precision);
    expect(coordinate.radius).closeTo(10, Precision);
    expect(coordinate.degree).closeTo(-90, Precision);
  });

  it('rotate will change x/y/theta, but keep radius/cx/cy', () => {
    const coordinate = new Coordinate().setCx(10).setCy(10).setRadius(10).setDegree(0);
    coordinate.rotateByDegree(90);
    expect(coordinate.degree).closeTo(90, Precision);
    expect(coordinate.x).closeTo(10, Precision);
    expect(coordinate.y).closeTo(20, Precision);
  });
});
