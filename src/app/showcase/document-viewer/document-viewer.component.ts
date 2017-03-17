import {Component, OnInit} from '@angular/core';
import {MetaService} from '../../core/meta.service';
import {Router} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  constructor(public meta: MetaService, private router: Router, private sourceCode: SourceCodeService) {
    this.router.events.subscribe(() => {
      this.document = this.sourceCode.loadFile(meta.id, 'md');
    });
  }

  document: Observable<string>;

  ngOnInit() {
  }

}
