import {Component} from '@angular/core';
import {MultiSelect, Transformers} from 'ui-model';

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
export class MultiSelectComponent {

  options = options;

  select = new MultiSelect<Data>().setOptions(options).setTransformer(Transformers.objectByField('code'));

  getCode = (value: Data) => {
    return value.code;
  }
}
