import {Component, OnInit} from '@angular/core';
import {MetaService} from '../../core/meta.service';
import {Select} from 'ui-model';
import * as hljs from 'highlight.js';
import {SourceCodeService} from '../../core/source-code.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
})
export class SourceViewerComponent implements OnInit {
  constructor(public meta: MetaService, private sourceCode: SourceCodeService) {
  }

  types = new Select<string>();
  files = ['ts', 'html', 'scss', 'spec.ts'];
  source: Observable<string>;

  ngOnInit() {
    this.source = this.types.changes
      .switchMap((ext) => this.sourceCode.loadFile(this.meta.id, this.types.selection))
      .map((content) => hljs.highlightAuto(content, ['ts', 'js', 'html', 'scss', 'css']).value);
    setTimeout(() => {
      this.types.select('ts');
    });
  }

  load(ext) {
    this.types.select(ext);
  }
}
