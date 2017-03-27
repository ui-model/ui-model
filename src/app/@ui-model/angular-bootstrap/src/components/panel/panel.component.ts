import {Component, Input} from '@angular/core';
import {Toggle} from '@ui-model/core';

@Component({
  selector: 'ui-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.scss'],
})
export class PanelComponent {
  @Input() title: string;
  @Input() toggleable = true;

  toggle = new Toggle().setIsOn(Toggle.ON);
}
