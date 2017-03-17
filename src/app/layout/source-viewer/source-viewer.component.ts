import {Component, OnInit} from '@angular/core';
import * as hljs from 'highlight.js';
import {SourceCodeService} from '../../core/source-code.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Metadata} from '../../showcase/_common/meta-data';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
})
export class SourceViewerComponent implements OnInit {
  constructor(private sourceCode: SourceCodeService, private route: ActivatedRoute) {
  }

  id: string;
  currentExt: string;
  meta: Metadata;
  extensions = ['ts', 'html', 'scss', 'spec.ts'];
  source: Observable<string>;

  ngOnInit() {
    this.route.params.subscribe(({id, ext = 'ts'}) => {
      const primeRoute = this.route.parent.children[0].children.find((route) => route.outlet === 'primary');
      this.meta = primeRoute.snapshot.data as Metadata;
      this.id = id;
      this.currentExt = ext;
      this.source = this.sourceCode.loadFile(id, ext)
        .map((content) => hljs.highlightAuto(content, ['ts', 'js', 'html', 'scss', 'css']).value);
    });
  }
}
