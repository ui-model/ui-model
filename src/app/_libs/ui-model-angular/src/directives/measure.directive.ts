import {Directive, Output, EventEmitter, ElementRef, OnInit} from '@angular/core';
import {Rect} from 'ui-model';

@Directive({
  selector: '[uiMeasure]',
  exportAs: 'uiMeasure',
  inputs: ['signal:uiMeasureSignal']
})
export class MeasureDirective implements OnInit {
  @Output('uiMeasureChange') changed = new EventEmitter<void>();

  private _signal: any;
  get signal(): any {
    return this._signal;
  }

  set signal(value: any) {
    this._signal = value;
    this.update();
  }

  boundingClientRect: Rect;
  offsetRect: Rect;
  clientRect: Rect;
  scrollRect: Rect;

  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.boundingClientRect = Rect.fromClientRect(this.element.getBoundingClientRect());
    this.offsetRect = new Rect(this.element.offsetLeft, this.element.offsetTop, this.element.offsetWidth, this.element.offsetHeight);
    this.clientRect = new Rect(this.element.clientLeft, this.element.clientTop, this.element.clientWidth, this.element.clientHeight);
    this.scrollRect = new Rect(this.element.scrollLeft, this.element.scrollTop, this.element.scrollWidth, this.element.scrollHeight);
    this.changed.emit();
  }
}
