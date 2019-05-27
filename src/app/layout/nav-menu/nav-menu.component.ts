import { Component, Input } from '@angular/core';
import { Author } from '../../utils/author';
import { Metadata } from '../../utils/meta-data';
import { showcaseRoutes } from '../../utils/showcase-routes';
import { Tag } from '../../utils/tag';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  items = showcaseRoutes;

  private _filter = '';
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

function matchAuthors(authors: Author[], pattern: RegExp): boolean {
  return authors && !!authors.find((author) => testAuthor(pattern, author));
}

function matchTags(tags: Tag[], pattern: RegExp): boolean {
  return tags && !!tags.find((tag) => testTag(pattern, tag));
}

function match(pattern: RegExp, meta: Metadata): boolean {
  return meta && pattern.test(meta.id) ||
    pattern.test(meta.title) ||
    pattern.test(meta.description) ||
    matchAuthors(meta.authors, pattern) || matchTags(meta.tags, pattern);
}
