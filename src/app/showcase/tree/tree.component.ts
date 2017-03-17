import {Component} from '@angular/core';
import {TreeNode} from 'ui-model-angular-bootstrap';
import {Metadata} from '../_common/meta-data';

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

  static meta = new Metadata()
    .setId('tree')
    .setTitle('Tree')
    .setTags(['tree'])
    .setDescription('')
    .setAuthors(['wzc']);
}
