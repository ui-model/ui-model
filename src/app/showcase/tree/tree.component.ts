import {Component} from '@angular/core';
import {TreeNode} from 'ui-model-angular-bootstrap';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  data: TreeNode = {
    label: '1',
    items: [
      {
        label: '11',
        items: [
          {
            label: '111',
          },
          {
            label: '112',
          }
        ]
      },
      {
        label: '12',
        items: [
          {
            label: '121',
          },
          {
            label: '122',
          },
        ]
      },

    ],
  };
}
