import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private sourceCode: SourceCodeService) {
    const primeRoute = this.route.parent.children[0].children.find((route) => route.outlet === 'primary');
    const data = primeRoute.snapshot.data as Metadata;
    if (data.document) {
      this.document = Observable.of(data.document);
    } else {
      this.route.params.subscribe(({id}) => {
        this.document = this.sourceCode.loadFile(id, 'md')
          .do((content) => {
            data.document = content;
          });
      });
    }
  }

  document: Observable<string>;

  ngOnInit() {
  }

}
