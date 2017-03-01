import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import {Toggle} from 'ui-model';

@Component({
  selector: 'ui-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.scss'],
  animations: [
    trigger('slide', [
      state('*', style({
        height: '*'
      })),
      state('void', style({
        height: 0
      })),
      transition('void => *', animate('200ms ease-out')),
      transition('* => void', animate('50ms ease-in')),
    ])
  ]
})
export class PanelComponent implements OnInit {

  @Input() title: string;
  @Input() toggleable = true;

  toggle = new Toggle(Toggle.ON);

  constructor() {
  }

  ngOnInit() {
  }

}
