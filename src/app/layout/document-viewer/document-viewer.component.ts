import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Metadata} from '../../utils/meta-data';
import {Subscription} from 'rxjs/Subscription';
import {MetadataService} from '../../core/metadata.service';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent {
  constructor(public meta: MetadataService) {
  }
}
