import {Component} from '@angular/core';

const items = [
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
@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent {

  items = items;

  selection = items[1];

  constructor() {
  }

  search(term): void {
    this.items = items.filter((item) => item.name.indexOf(term) !== -1)
  }
}
