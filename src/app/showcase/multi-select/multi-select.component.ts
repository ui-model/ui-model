import {Component, OnInit} from '@angular/core';
import {MultiSelect, Suppliers} from 'ui-model';

class Data {
  code: string;
  label: string;
}

const options = [
  {
    code: 'a',
    label: 'A'
  },
  {
    code: 'b',
    label: 'B',
  },
  {
    code: 'c',
    label: 'C',
  },
  {
    code: 'd',
    label: 'D',
  }
];
@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  options: Data[] = options;

  select: MultiSelect<Data> = new MultiSelect<Data>(options, Suppliers.objectByField('code'));

  constructor() {
  }

  ngOnInit() {
  }

}
