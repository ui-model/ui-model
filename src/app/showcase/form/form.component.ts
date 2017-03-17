import {Component, OnInit} from '@angular/core';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  email: string;
  report: string;

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
