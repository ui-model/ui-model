import {Component, Input} from '@angular/core';
import {showcaseRoutes} from '../../app-routing.module';
import {Metadata} from '../../showcase/_common/meta-data';
import {Author} from '../../showcase/_common/author';
import {Tag} from '../../showcase/_common/tag';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  items = showcaseRoutes;

  private _filter: string = '';
  get filter(): string {
    return this._filter;
  }

  @Input()
  set filter(value: string) {
    this._filter = value;
    const pattern = new RegExp(value, 'im');
    this.items = showcaseRoutes.filter((route) => match(pattern, route.data as Metadata));
  }
}

function testAuthor(pattern: RegExp, author: Author): boolean {
  return author && pattern.test(author.name) || pattern.test(author.id) || pattern.test(author.email);
}
function testTag(pattern: RegExp, tag: Tag): boolean {
  return tag && pattern.test(tag.keyword);
}
function match(pattern: RegExp, meta: Metadata): boolean {
  return pattern.test(meta.id) ||
    pattern.test(meta.title) ||
    pattern.test(meta.description) ||
    pattern.test(meta.document) ||
    pattern.test(meta.id) || !!meta.authors.find((author) => testAuthor(pattern, author)) || !!meta.tags.find((tag) => testTag(pattern, tag));
}
