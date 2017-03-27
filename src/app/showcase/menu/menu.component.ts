import {Component} from '@angular/core';
import {Select} from '@ui-model/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  options = [
    {
      label: 'A',
      id: 'a',
      items: [
        {
          label: 'A1',
          id: 'a1',
        },
        {
          label: 'A2',
          id: 'a2',
        }
      ]
    },
    {
      label: 'B',
      id: 'b',
      items: [
        {
          label: 'B1',
          id: 'b1',
        },
        {
          label: 'B2',
          id: 'b2',
        }
      ]
    },
    {
      label: 'C',
      id: 'c',
      items: [
        {
          label: 'C1',
          id: 'c1',
        },
        {
          label: 'C2',
          id: 'c2',
        }
      ]
    },
    {
      label: 'D',
      id: 'd',
      items: [
        {
          label: 'D1',
          id: 'd1',
        },
        {
          label: 'D2',
          id: 'd2',
        }
      ]
    },
    {
      label: 'E',
      id: 'e',
      items: [
        {
          label: 'E1',
          id: 'e1',
        },
        {
          label: 'E2',
          id: 'e2',
        }
      ]
    },
  ];

  select = new Select<{label: string, id: string}>().select(this.options[1]);
  subMenu = new Select<{label: string, id: string}>();
}
