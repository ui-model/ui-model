import {Component, OnInit} from '@angular/core';
import {showcaseRoutes} from '../../app-routing.module';
import {Metadata} from '../../showcase/_common/meta-data';
import {SourceCodeService} from '../../core/source-code.service';

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
    .map((data: Metadata) => data.tags)
    .reduce((result, tags) => result.concat(tags), [])
    .sort((v1, v2) => v2.weight - v1.weight)
    .slice(0, 5);

  setFilter(filter: string): void {
    this.filter = filter;
  }

  ngOnInit(): void {
    showcaseRoutes
      .map((route) => route.data)
      .forEach((data: Metadata) => {
        this.sourceCode.loadFile(data.id, 'md').subscribe((content) => data.document = content);
      });
  }
}
