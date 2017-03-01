import {Component, OnInit, Input} from '@angular/core';
import {TreeNode} from './tree-node';
import {Toggle} from 'ui-model';

@Component({
  selector: 'ui-tree-node',
  templateUrl: 'tree-node.component.html',
  styleUrls: ['tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() data: TreeNode;
  toggle = new Toggle(true);

  constructor() {
  }

  ngOnInit() {
  }

}
