import { Component } from '@angular/core';

@Component({
  selector: 'app-select-ng-model',
  templateUrl: './select-ng-model.component.html',
  styleUrls: ['./select-ng-model.component.scss'],
})
export class SelectNgModelComponent {
  selection;
  options = [{name: 'A', id: 'a'}, {name: 'B', id: 'b'}];
}
