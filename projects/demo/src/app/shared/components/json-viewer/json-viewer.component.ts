import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss'],
})
export class JsonViewerComponent implements OnInit {

  constructor() {
  }

  @Input() value: any;

  ngOnInit(): void {
  }

}
