import {Component, ViewChild} from '@angular/core';
import {MeasureDirective, TooltipService} from 'ui-model-angular';

@Component({
  selector: 'ui-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  constructor(public tooltip: TooltipService) {
  }

  @ViewChild('measure') measure: MeasureDirective;

  get left(): number {
    return this.tooltip.targetRect.left + (this.tooltip.targetRect.width - this.measure.boundingRect.width) / 2;
  }

  get top(): number {
    return this.tooltip.targetRect.bottom;
  }
}
