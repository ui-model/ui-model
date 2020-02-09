import { Component } from '@angular/core';

import { toArray } from 'lodash';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {

  toFiles(files: FileList): File[] {
    return toArray(files);
  }

}
