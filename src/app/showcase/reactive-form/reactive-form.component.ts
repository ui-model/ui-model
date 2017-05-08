import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { maxValue, minValue } from '@ui-model/angular';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {
  }


  form = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
    basic: new FormGroup({
      age: new FormControl('', Validators.compose([Validators.required, minValue(10), maxValue(20)])),
    }),
  });

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get basic(): AbstractControl {
    return this.form.get('basic');
  }

  ngOnInit(): void {
  }

}
