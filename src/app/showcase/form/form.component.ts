import {Component, OnInit} from '@angular/core';
import {Metadata} from '../_common/meta-data';

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

  static meta = new Metadata()
    .setId('form')
    .setTitle('Form')
    .setTags(['form'])
    .setDescription('')
    .setAuthors(['wzc']);
}
