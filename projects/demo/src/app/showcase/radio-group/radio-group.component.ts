import { Component } from '@angular/core';
import { Select } from '@ui-model/common';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent {
  options = [
    {
      label: 'A1',
      id: 'a1',
    },
    {
      label: 'B1',
      id: 'b1',
    },
    {
      label: 'C1',
      id: 'c1',
    },
    {
      label: 'D1',
      id: 'd1',
    },
    {
      label: 'E1',
      id: 'e1',
    },
  ];
  options2 = [
    {
      label: 'A1',
      code: 'a1',
    },
    {
      label: 'B1',
      code: 'b1',
    },
    {
      label: 'C1',
      code: 'c1',
    },
    {
      label: 'D1',
      code: 'd1',
    },
    {
      label: 'E1',
      code: 'e1',
    },
  ];

  select = new Select<{ label: string, id: string }>()
    .setValueField('id')
    .select(this.options[1]);
}
