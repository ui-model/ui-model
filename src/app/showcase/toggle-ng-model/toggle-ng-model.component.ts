import {Component} from '@angular/core';

@Component({
  selector: 'app-toggle-ng-model',
  templateUrl: './toggle-ng-model.component.html',
  styleUrls: ['./toggle-ng-model.component.scss']
})
export class ToggleNgModelComponent {
  more = false;

  open(): void {
    this.more = true;
  }

  close(): void {
    this.more = false;
  }
}
