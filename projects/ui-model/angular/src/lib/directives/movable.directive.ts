import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Distance, Point } from '@ui-model/core';

// TODO: 处理 svg 坐标系映射

@Directive({
  selector: '[uiMovable]',
  exportAs: 'uiMovable',
})
export class MovableDirective {
  @Output('uiMoveStart') start = new EventEmitter<MouseEvent>();
  @Output('uiMoving') move = new EventEmitter<MouseEvent>();
  @Output('uiMoveStop') stop = new EventEmitter<MouseEvent>();

  moving = false;

  startPos = new Point();
  latestPos = new Point();
  pos = new Point();

  get offset(): Distance {
    return this.pos.getDistanceTo(this.startPos);
  }

  get delta(): Distance {
    return this.pos.getDistanceTo(this.latestPos);
  }

  @HostListener('click', ['$event'])
  click(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }

    const target = event.target as Element;
    target.setPointerCapture(1);
    event.stopPropagation();
    this.moving = true;
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
    this.start.emit(event);
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    (event.target as Element).releasePointerCapture(1);
    event.stopPropagation();
    this.moving = false;
    this.stop.emit(event);
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.stopPropagation();
    if (this.moving) {
      this.latestPos = this.pos;
      this.pos = new Point(event.screenX, event.screenY);
      this.move.emit(event);
    }
  }
}

function isMajorButton(event: MouseEvent): boolean {
  return event.button === 0;
}
