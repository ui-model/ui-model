import {Component, OnInit, OnDestroy} from '@angular/core';
import * as hljs from 'highlight.js';
import {SourceCodeService} from '../../core/source-code.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {Metadata} from '../../utils/meta-data';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
})
export class SourceViewerComponent implements OnInit, OnDestroy {
  constructor(private sourceCode: SourceCodeService, private route: ActivatedRoute) {
  }

  id: string;
  currentExt: string;
  meta: Metadata;
  extensions = ['html', 'ts', 'scss', 'spec.ts'];
  source: Observable<string>;

  sub: Subscription;
  ngOnInit() {
    this.sub = this.route.params.subscribe(({id, ext = 'html'}) => {
      const primeRoute = this.route.parent.children[0].children.find((route) => route.outlet === 'primary');
      this.meta = primeRoute.snapshot.data as Metadata;
      this.id = id;
      this.currentExt = ext;
      this.source = this.sourceCode.loadFile(id, ext)
        .map((content) => hljs.highlightAuto(content, ['ts', 'js', 'html', 'scss', 'css']).value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
