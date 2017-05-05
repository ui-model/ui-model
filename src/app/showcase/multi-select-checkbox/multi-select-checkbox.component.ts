import { Component } from '@angular/core';
import { MultiSelect } from '@ui-model/core';
import { Transformers } from '@ui-model/common';

@Component({
  selector: 'app-multi-select-checkbox',
  templateUrl: './multi-select-checkbox.component.html',
  styleUrls: ['./multi-select-checkbox.component.scss'],
})
export class MultiSelectCheckboxComponent {
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

  select = new MultiSelect<{ code: string, label: string }>().setOptions(this.options).setTransformer(Transformers.objectByField('code'));

  getCode = ({code}) => {
    return code;
  };
}
