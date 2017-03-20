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

  tags = ['toggle', 'select', 'multi-select', 'pager', 'viewport', 'calendar', 'zoom'];

  private _filter: string;
  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
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
