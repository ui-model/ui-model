import {Component, OnInit} from '@angular/core';
import {Metadata} from '../../utils/meta-data';
import {SourceCodeService} from '../../core/source-code.service';
import {showcaseRoutes} from '../../utils/showcase-routes';
import {Tag} from '../../utils/tag';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private sourceCode: SourceCodeService) {
  }

  tags: Tag[];
  private _filter: string;
  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    const pattern = new RegExp(value, 'i');
    this.tags = showcaseRoutes
      .map((route) => route.data)
      .map((data) => (data as Metadata).tags)
      .reduce((result, tags) => result.concat(tags), [])
      .filter((tag) => !!tag)
      .filter((tag) => !this._filter || pattern.test(tag.keyword))
      .sort((v1, v2) => v2.weight - v1.weight);
    this.tags = _.uniqBy(this.tags, 'keyword');

  }

  setFilter(filter: string): void {
    this.filter = filter;
  }

  ngOnInit(): void {
    this.setFilter('');
    showcaseRoutes
      .map((route) => route.data)
      .forEach((data) => {
        const meta = data as Metadata;
        this.sourceCode.loadDocument(meta.id).subscribe((content) => meta.document = content);
      });
  }
}
