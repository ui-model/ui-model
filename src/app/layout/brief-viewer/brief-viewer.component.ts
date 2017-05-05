import { Component } from '@angular/core';
import { MetadataService } from '../../core/metadata.service';

@Component({
  selector: 'app-brief-viewer',
  templateUrl: './brief-viewer.component.html',
  styleUrls: ['./brief-viewer.component.scss'],
})
export class BriefViewerComponent {
  constructor(public meta: MetadataService) {
  }
}
