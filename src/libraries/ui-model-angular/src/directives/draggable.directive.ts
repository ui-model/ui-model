import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[uiDraggable]'
})
export class DraggableDirective {
  @Output('uiDragStart') start: EventEmitter<void> = new EventEmitter<void>();
  @Output('uiDragMove') move: EventEmitter<any> = new EventEmitter();
  @Output('uiDragStop') stop: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  pressed: boolean = false;
  startX: number = NaN;
  startY: number = NaN;

  @HostListener('click', ['$event'])
  private click(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  private mouseDown(event: MouseEvent): void {
    event.srcElement.setPointerCapture(1);
    event.stopPropagation();
    this.pressed = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.start.emit();
  }

  @HostListener('mouseup', ['$event'])
  private mouseUp(event: MouseEvent): void {
    event.srcElement.releasePointerCapture(1);
    event.stopPropagation();
    this.pressed = false;
    this.startX = NaN;
    this.startY = NaN;
    this.stop.emit();
    this.move.emit({x: 0, y: 0});
  }

  @HostListener('mousemove', ['$event'])
  private mouseMove(event: MouseEvent): void {
    event.stopPropagation();
    if (this.pressed) {
      this.move.emit({x: event.clientX - this.startX, y: event.clientY - this.startY});
    }
  }
}
