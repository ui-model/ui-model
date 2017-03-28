import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Metadata} from '../../utils/meta-data';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private sourceCode: SourceCodeService) {
  }

  sub: Subscription;
  document: Observable<string>;

  ngOnInit() {
    this.sub = this.route.url.subscribe(() => {
      const primaryRoute = this.route.parent.children[0].children.find((value) => value.outlet === 'primary');
      const data = primaryRoute.snapshot.data as Metadata;
      if (data.document) {
        this.document = Observable.of(data.document);
      } else {
        this.route.params.subscribe(({id}) => {
          this.document = this.sourceCode.loadDocument(id)
            .do((content) => {
              data.document = content;
            });
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
