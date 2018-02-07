import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
})
export class TypeAheadComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.originItems.forEach((item) => {
      item['format'] = () => {
        return this.sanitizer.bypassSecurityTrustHtml(`<label onclick="alert(1)">${item.name}</label> - <code>${item.id}</code>`);
      };
      item['parse'] = () => {
        return item.name;
      };

    });
  }

  originItems = [
    {
      name: 'a',
      id: 1,
    },
    {
      name: 'b',
      id: 2,
    },
    {
      name: 'abc',
      id: 3,
    },
    {
      name: 'cba',
      id: 4,
    },
  ];

  items = this.originItems;

  selection = this.originItems[1];

  search(term: string): void {
    this.items = this.originItems.filter((item) => item.name.indexOf(term) !== -1);
  }

  select(item: any): void {
    this.selection = item;
  }
}
