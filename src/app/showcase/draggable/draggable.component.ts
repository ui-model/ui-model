import {Component, OnInit} from '@angular/core';

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

}
