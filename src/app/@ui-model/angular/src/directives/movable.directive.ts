import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Distance, Point } from '@ui-model/common';

@Directive({
  selector: '[uiMovable]',
  exportAs: 'uiMovable',
})
export class MovableDirective {
  @Output('uiMoveStart') onStart = new EventEmitter<MouseEvent>();
  @Output('uiMoving') onMove = new EventEmitter<MouseEvent>();
  @Output('uiMoveStop') onStop = new EventEmitter<MouseEvent>();

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
  private click(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  private mouseDown(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.srcElement.setPointerCapture(1);
    event.stopPropagation();
    this.moving = true;
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
    this.onStart.emit(event);
  }

  @HostListener('mouseup', ['$event'])
  private mouseUp(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.srcElement.releasePointerCapture(1);
    event.stopPropagation();
    this.moving = false;
    this.onStop.emit(event);
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
  }

  @HostListener('mousemove', ['$event'])
  private mouseMove(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.stopPropagation();
    if (this.moving) {
      this.latestPos = this.pos;
      this.pos = new Point(event.screenX, event.screenY);
      this.onMove.emit(event);
    }
  }
}

function isMajorButton(event: MouseEvent): boolean {
  return event.button === 0;
}
