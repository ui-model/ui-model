import {Component, OnInit} from '@angular/core';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'ui-app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {

  offset = {};

  constructor() {
  }

  ngOnInit() {
  }

  static meta = new Metadata()
    .setId('draggable')
    .setTitle('Draggable')
    .setTags(['draggable'])
    .setDescription('')
    .setAuthors(['wzc']);
}
