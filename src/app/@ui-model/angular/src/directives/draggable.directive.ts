import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Distance, Point } from '@ui-model/common';

@Directive({
  selector: '[uiDraggable]',
  exportAs: 'uiDraggable',
})
export class DraggableDirective {
  @Output('uiDragStart') onStart = new EventEmitter<void>();
  @Output('uiDragMove') onMove = new EventEmitter<any>();
  @Output('uiDragStop') onStop = new EventEmitter<void>();

  dragging = false;

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
    this.dragging = true;
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
    this.onStart.emit();
    this.onMove.emit({x: 0, y: 0});
  }

  @HostListener('mouseup', ['$event'])
  private mouseUp(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.srcElement.releasePointerCapture(1);
    event.stopPropagation();
    this.dragging = false;
    this.onMove.emit(this.delta);
    this.onStop.emit();
    this.startPos = new Point(event.screenX, event.screenY);
    this.pos = new Point(event.screenX, event.screenY);
  }

  @HostListener('mousemove', ['$event'])
  private mouseMove(event: MouseEvent): void {
    if (!isMajorButton(event)) {
      return;
    }
    event.stopPropagation();
    if (this.dragging) {
      this.latestPos = this.pos;
      this.pos = new Point(event.screenX, event.screenY);
      this.onMove.emit(this.delta);
    }
  }
}

function isMajorButton(event: MouseEvent): boolean {
  return event.button === 0;
}
