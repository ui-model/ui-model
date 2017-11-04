import { Component } from '@angular/core';
import { MetadataService } from '../../../core/metadata.service';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss'],
})
export class SourceViewerComponent {
  constructor(public meta: MetadataService) {
  }
}
