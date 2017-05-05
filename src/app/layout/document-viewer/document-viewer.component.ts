import { Component } from '@angular/core';
import 'rxjs/add/observable/of';
import { MetadataService } from '../../core/metadata.service';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss'],
})
export class DocumentViewerComponent {
  constructor(public meta: MetadataService) {
  }
}
