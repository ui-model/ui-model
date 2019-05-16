import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Rect } from '@ui-model/common';

// TODO: 改用 Mutation​Observer
@Directive({
  selector: '[uiMeasure]',
  exportAs: 'uiMeasure',
})
export class MeasureDirective implements OnInit {

  get signal(): any {
    return this._signal;
  }

  @Input('uiMeasureSignal')
  set signal(value: any) {
    this._signal = value;
    this.update();
  }
  get boundingClientRect(): Rect {
    return this._boundingClientRect;
  }

  get boundingRect(): Rect {
    return this.boundingClientRect;
  }
  get offsetRect(): Rect {
    return this._offsetRect;
  }
  get clientRect(): Rect {
    return this._clientRect;
  }
  get scrollRect(): Rect {
    return this._scrollRect;
  }

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @Output('uiMeasure')
  changed = new EventEmitter<MeasureDirective>();
  private element: HTMLElement;

  private _signal: any;

  private _boundingClientRect: Rect;

  private _offsetRect: Rect;

  private _clientRect: Rect;

  private _scrollRect: Rect;

  @HostListener('load')
  onLoad(): void {
    this.update();
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._boundingClientRect = Rect.fromClientRect(this.element.getBoundingClientRect());
    this._offsetRect = Rect.from(this.element.offsetLeft, this.element.offsetTop, this.element.offsetWidth, this.element.offsetHeight);
    this._clientRect = Rect.from(this.element.clientLeft, this.element.clientTop, this.element.clientWidth, this.element.clientHeight);
    this._scrollRect = Rect.from(this.element.scrollLeft, this.element.scrollTop, this.element.scrollWidth, this.element.scrollHeight);
    Promise.resolve().then(() => {
      this.changed.emit(this);
    });
  }
}
