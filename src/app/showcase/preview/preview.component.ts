import {Component, OnInit} from '@angular/core';
import {Metadata} from '../_common/meta-data';

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

  static meta = new Metadata()
    .setId('preview')
    .setTitle('Preview')
    .setTags(['preview'])
    .setDescription('')
    .setAuthors(['wzc']);
}
