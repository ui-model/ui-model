import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  files = [];

  constructor() {
  }

  ngOnInit() {
  }

}
