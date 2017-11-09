import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Rect } from '@ui-model/common';

@Directive({
  selector: '[uiMeasure]',
  exportAs: 'uiMeasure',
})
export class MeasureDirective implements OnInit {
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @Output('uiMeasure')
  changed = new EventEmitter<MeasureDirective>();

  private _signal: any;
  get signal(): any {
    return this._signal;
  }

  @Input('uiMeasureSignal')
  set signal(value: any) {
    this._signal = value;
    this.update();
  }

  @HostListener('load')
  onLoad(): void {
    this.update();
  }

  private _boundingClientRect: Rect;
  get boundingClientRect(): Rect {
    return this._boundingClientRect;
  }

  get boundingRect(): Rect {
    return this.boundingClientRect;
  }

  private _offsetRect: Rect;
  get offsetRect(): Rect {
    return this._offsetRect;
  }

  private _clientRect: Rect;
  get clientRect(): Rect {
    return this._clientRect;
  }

  private _scrollRect: Rect;
  get scrollRect(): Rect {
    return this._scrollRect;
  }

  private element: HTMLElement;

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._boundingClientRect = Rect.fromClientRect(this.element.getBoundingClientRect());
    this._offsetRect = Rect.from(this.element.offsetLeft, this.element.offsetTop, this.element.offsetWidth, this.element.offsetHeight);
    this._clientRect = Rect.from(this.element.clientLeft, this.element.clientTop, this.element.clientWidth, this.element.clientHeight);
    this._scrollRect = Rect.from(this.element.scrollLeft, this.element.scrollTop, this.element.scrollWidth, this.element.scrollHeight);
    this.changed.emit(this);
  }
}
