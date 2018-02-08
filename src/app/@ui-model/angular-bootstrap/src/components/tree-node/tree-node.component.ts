import { Component, Input } from '@angular/core';
import { Toggle } from '@ui-model/core';
import { TreeNode } from './tree-node';

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
