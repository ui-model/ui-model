import {Directive, Output, EventEmitter, ElementRef, OnInit} from "@angular/core";
import {isNullOrUndefined} from "util";

class Size {
  width: number;
  height: number;
}
@Directive({
  selector: '[uiResize]',
  exportAs: 'uiResize',
  inputs: ['size:uiResize'],
})
export class ResizeDirective implements OnInit {
  @Output('uiResizeChange') resize: EventEmitter<Size> = new EventEmitter();

  _size: Size = {width: 0, height: 0};

  get size(): Size {
    return this._size;
  }

  // TODO: box-sizing
  set size(value: Size) {
    if (!value) {
      return;
    }

    const oldSize = this.size;
    let changed = false;
    if (!isNullOrUndefined(value.width) && oldSize.width !== value.width) {
      this.element.nativeElement.style.width = value.width;
      changed = true;
    }
    if (!isNullOrUndefined(value.height) && oldSize.height !== value.height) {
      this.element.nativeElement.style.height = value.height;
      changed = true;
    }
    if (changed) {
      this.update();
    }
  }


  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._size = {
      width: this.element.nativeElement.clientWidth,
      height: this.element.nativeElement.clientHeight,
    };
    this.resize.emit({width: this.size.width, height: this.size.height});
  }
}
