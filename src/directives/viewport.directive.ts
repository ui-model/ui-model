import { Directive, Output, EventEmitter } from '@angular/core';
import { Viewport } from 'ui-model';

@Directive({
  selector: '[uiViewport]',
  inputs: ['allItems', 'allItems:uiViewport', 'viewport', 'index'],
  exportAs: 'uiViewport'
})
export class ViewportDirective<T> extends Viewport<T> {
  @Output('indexChange') indexChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    super();
    this.changes.subscribe(() => {
      if (this.indexChange) {
        this.indexChange.emit(this.index);
      }
    });
  }
}
