import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.originItems.forEach((item) => {
      item['format'] = () => {
        return this.sanitizer.bypassSecurityTrustHtml(`<label onclick="alert(1)">${item.name}</label> - <code>${item.value}</code>`);
      };
      item['parse'] = () => {
        return item.name;
      };

    });
  }

  originItems = [
    {
      name: 'a',
      value: 1,
    },
    {
      name: 'b',
      value: 2,
    },
    {
      name: 'abc',
      value: 3,
    },
    {
      name: 'cba',
      value: 4,
    },
  ];

  items = this.originItems;

  selection = this.originItems[1];

  search(term): void {
    this.items = this.originItems.filter((item) => item.name.indexOf(term) !== -1);
  }

  select(item): void {
    this.selection = item;
  }

  static meta = new Metadata()
    .setId('type-ahead')
    .setTitle('Type-ahead')
    .setTags(['type-ahead'])
    .setDescription('')
    .setAuthors(['wzc']);
}
