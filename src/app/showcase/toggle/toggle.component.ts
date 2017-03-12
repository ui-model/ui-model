import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  editorValue = 'Click to edit & press enter to submit';
}
