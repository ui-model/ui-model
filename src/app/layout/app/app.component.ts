import {Component, OnInit} from '@angular/core';
import {Metadata} from '../../utils/meta-data';
import {SourceCodeService} from '../../core/source-code.service';
import {showcaseRoutes} from '../../utils/showcase-routes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private sourceCode: SourceCodeService) {
  }

  filter: string;
  tags = showcaseRoutes
    .map((route) => route.data)
    .map((data) => (data as Metadata).tags)
    .reduce((result, tags) => result.concat(tags), [])
    .sort((v1, v2) => v2.weight - v1.weight)
    .slice(0, 5);

  setFilter(filter: string): void {
    this.filter = filter;
  }

  ngOnInit(): void {
    showcaseRoutes
      .map((route) => route.data)
      .forEach((data) => {
        const meta = data as Metadata;
        this.sourceCode.loadDocument(meta.id).subscribe((content) => meta.document = content);
      });
  }
}
