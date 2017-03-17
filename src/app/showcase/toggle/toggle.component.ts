import {Component, OnInit} from '@angular/core';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  editorValue = 'Click to edit & press enter to submit';

  static meta = new Metadata()
    .setId('toggle')
    .setTitle('Toggle')
    .setTags(['toggle'])
    .setDescription('')
    .setAuthors(['wzc']);
}
