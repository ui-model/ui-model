export class Coordinate {
  cx: number;
  cy: number;
  radius: number;
  radian: number;

  get x(): number {
    return this.cx + this.radius * Math.cos(this.radian);
  }

  set x(value: number) {
    const x = value - this.cx;
    const y = this.y - this.cy;
    this.radius = Math.sqrt(x * x + y * y);
    this.radian = Math.atan2(y, x);
  }

  get y(): number {
    return this.cy + this.radius * Math.sin(this.radian);
  }

  set y(value: number) {
    const x = this.x - this.cx;
    const y = value - this.cy;
    this.radius = Math.sqrt(x * x + y * y);
    this.radian = Math.atan2(y, x);
  }

  get degree(): number {
    return radianToDegree(this.radian);
  }

  set degree(value: number) {
    this.radian = degreeToRadian(value);
  }

  get percent(): number {
    return radianToPercent(this.radian);
  }

  set percent(value: number) {
    this.radian = percentToRadian(value);
  }

  setCx(value: number): Coordinate {
    this.cx = value;
    return this;
  }

  setCy(value: number): Coordinate {
    this.cy = value;
    return this;
  }

  setX(value: number): Coordinate {
    this.x = value;
    return this;
  }

  setY(value: number): Coordinate {
    this.y = value;
    return this;
  }

  setRadius(value: number): Coordinate {
    this.radius = value;
    return this;
  }

  setRadian(value: number): Coordinate {
    this.radian = value;
    return this;
  }

  setDegree(value: number): Coordinate {
    this.degree = value;
    return this;
  }

  setPercent(value: number): Coordinate {
    this.percent = value;
    return this;
  }

  moveX(dx: number): Coordinate {
    this.x += dx;
    return this;
  }

  moveY(dy: number): Coordinate {
    this.y += dy;
    return this;
  }

  move(dx: number, dy: number): Coordinate {
    this.moveX(dx);
    this.moveY(dy);
    return this;
  }

  translateX(dx: number): Coordinate {
    const latestX = this.x;
    this.cx += dx;
    this.x = latestX;
    return this;
  }

  translateY(dy: number): Coordinate {
    const latestY = this.y;
    this.cy += dy;
    this.y = latestY;
    return this;
  }

  /* Move origin, keep x and y */
  translate(dx: number, dy: number): Coordinate {
    this.translateX(dx);
    this.translateY(dy);
    return this;
  }

  rotate(theta: number): Coordinate {
    this.radian += theta;
    return this;
  }

  rotateByDegree(degree: number): Coordinate {
    return this.rotate(degreeToRadian(degree));
  }

  rotateByPercent(percent: number): Coordinate {
    return this.rotate(percentToRadian(percent));
  }
}

export function degreeToRadian(degree: number): number {
  return degree / 180 * Math.PI;
}

export function radianToDegree(radian: number): number {
  return radian * 180 / Math.PI;
}

export function percentToRadian(percent: number): number {
  return percent * (2 * Math.PI);
}

export function radianToPercent(radian: number): number {
  return radian / (2 * Math.PI);
}

