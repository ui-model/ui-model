import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Rect } from '@ui-model/core';
import { Subscription } from 'rxjs';
import { WindowMeasureService } from '../services/window-measure.service';

@Directive({
  selector: '[uiWindowMeasure]',
  exportAs: 'uiWindowMeasure',
})
export class WindowMeasureDirective implements OnInit, OnDestroy {
  constructor(private measure: WindowMeasureService) {
  }

  @Output()
  resize = new EventEmitter<Window>();
  private sub: Subscription;

  get innerRect(): Rect {
    return this.measure.innerRect;
  }

  get outerRect(): Rect {
    return this.measure.outerRect;
  }

  ngOnInit(): void {
    this.sub = this.measure.resize$.subscribe((window) => {
      this.resize.next(window);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
