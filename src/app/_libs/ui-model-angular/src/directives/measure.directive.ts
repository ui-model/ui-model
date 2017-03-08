import {Directive, Output, EventEmitter, ElementRef, OnInit, Input, HostListener} from '@angular/core';
import {Rect} from 'ui-model';

@Directive({
  selector: '[uiMeasure]',
  exportAs: 'uiMeasure',
})
export class MeasureDirective implements OnInit {
  @Output('uiMeasureChange') changed = new EventEmitter<void>();

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
  onLoad() {
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

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._boundingClientRect = Rect.fromClientRect(this.element.getBoundingClientRect());
    this._offsetRect = new Rect(this.element.offsetLeft, this.element.offsetTop, this.element.offsetWidth, this.element.offsetHeight);
    this._clientRect = new Rect(this.element.clientLeft, this.element.clientTop, this.element.clientWidth, this.element.clientHeight);
    this._scrollRect = new Rect(this.element.scrollLeft, this.element.scrollTop, this.element.scrollWidth, this.element.scrollHeight);
    this.changed.emit();
  }
}
