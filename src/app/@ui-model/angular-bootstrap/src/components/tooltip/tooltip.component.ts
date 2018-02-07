import { Component } from '@angular/core';
import { MeasureDirective, TooltipService } from '@ui-model/angular';
import { Rect } from '@ui-model/common';

@Component({
  selector: 'ui-tooltip',
  template: require('./tooltip.component.html'),
  styles: [require('./tooltip.component.scss')],
})
export class TooltipComponent {
  constructor(public tooltip: TooltipService) {
  }

  rect: Rect = new Rect();

  resize($event: MeasureDirective): void {
    this.rect = this.tooltip.getRectFor($event.boundingClientRect);
  }
}
