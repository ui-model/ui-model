import {Component} from '@angular/core';
import {TooltipService} from 'ui-model-angular';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  constructor(public tooltip: TooltipService) {
  }

  total = 10;
  html = '<strong>strong</strong><em>def</em>';

  alert() {
    alert(1);
  }
}
