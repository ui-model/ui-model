import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info-group',
  templateUrl: './basic-info-group.component.html',
  styleUrls: ['./basic-info-group.component.scss'],
})
export class BasicInfoGroupComponent implements OnInit {
  constructor() {
  }

  @Input() group: FormGroup;

  get age(): AbstractControl {
    return this.group && this.group.get('age');
  }

  ngOnInit(): void {
  }

}
