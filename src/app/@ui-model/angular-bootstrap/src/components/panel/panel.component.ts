import { Component, Input } from '@angular/core';
import { Toggle } from '@ui-model/core';

@Component({
  selector: 'ui-panel',
  template: require('./panel.component.html'),
  styles: [require('./panel.component.scss')],
})
export class PanelComponent {
  @Input() title: string;
  @Input() toggleable = true;

  toggle = new Toggle().setIsOn(Toggle.ON);
}
