import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node';
import { Toggle } from '@ui-model/core';

@Component({
  selector: 'ui-tree-node',
  templateUrl: 'tree-node.component.html',
  styleUrls: ['tree-node.component.scss'],
})
export class TreeNodeComponent {
  @Input() data: TreeNode;
  toggle = new Toggle().setIsOn(Toggle.ON);
}

export * from './tree-node';
