import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  email: string;
  report: string;

  constructor() {
  }

  ngOnInit() {
  }

  submit(value): void {
    this.report = JSON.stringify(value, null, 2);
  }
}
