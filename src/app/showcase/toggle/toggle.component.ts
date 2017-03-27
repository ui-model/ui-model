import {Component} from '@angular/core';
import {Toggle} from '@ui-model/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  toggle = new Toggle();
}
