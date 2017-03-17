import {Component} from '@angular/core';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  files = [];

  static meta = new Metadata()
    .setId('preview')
    .setTitle('Preview')
    .setTags(['preview'])
    .setDescription('')
    .setAuthors(['wzc']);
}
