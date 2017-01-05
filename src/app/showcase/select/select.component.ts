import {Component, OnInit} from '@angular/core';

class Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  options: Option[] = [
    {
      label: 'A1',
      value: 'a1',
    },
    {
      label: 'B1',
      value: 'b1',
    },
    {
      label: 'C1',
      value: 'c1',
    },
    {
      label: 'D1',
      value: 'd1',
    },
    {
      label: 'E1',
      value: 'e1',
    },
  ];
  value: Option = this.options[1];

  constructor() {
  }

  ngOnInit() {
  }

}
