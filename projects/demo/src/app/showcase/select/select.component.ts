import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
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

  selection = this.options[1];
}

