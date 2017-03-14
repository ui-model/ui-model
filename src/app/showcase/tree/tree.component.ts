import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'ui-model-angular-bootstrap';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'ui-app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit() {
  }

  static meta = new Metadata()
    .setId('tree')
    .setTitle('Tree')
    .setTags(['tree'])
    .setDescription('')
    .setAuthors(['wzc']);
}
