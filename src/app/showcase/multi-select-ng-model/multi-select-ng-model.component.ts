import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-select-ng-model',
  templateUrl: './multi-select-ng-model.component.html',
  styleUrls: ['./multi-select-ng-model.component.scss'],
})
export class MultiSelectNgModelComponent {
  selection;
  options = [
    {
      code: 'a',
      label: 'A',
    },
    {
      code: 'b',
      label: 'B',
    },
    {
      code: 'c',
      label: 'C',
    },
    {
      code: 'd',
      label: 'D',
    },
  ];

  getCode = ({code}) => {
    return code;
  }
}
