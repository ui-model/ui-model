import {Component, OnInit} from '@angular/core';
import {MultiSelect, Transformers} from 'ui-model';
import {Metadata} from '../_common/meta-data';

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
  selector: 'ui-app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  options = options;

  select = new MultiSelect<Data>().setOptions(options).setTransformer(Transformers.objectByField('code'));

  getCode = (value: Data) => {
    return value.code;
  };

  constructor() {
  }

  ngOnInit() {
  }

  static meta = new Metadata()
    .setId('multi-select')
    .setTitle('Multi-select')
    .setTags(['multi-select'])
    .setDescription('')
    .setAuthors(['wzc']);
}
