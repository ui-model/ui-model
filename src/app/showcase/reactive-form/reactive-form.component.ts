import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maxValue, minValue } from '@ui-model/angular';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      basic: fb.group({
        age: [0, Validators.compose([Validators.required, minValue(10), maxValue(20)])],
      }),
    });
  }

  form: FormGroup;

  get name(): AbstractControl {
    return this.form && this.form.get('name');
  }

  get basic(): AbstractControl {
    return this.form && this.form.get('basic');
  }

  ngOnInit(): void {

  }

}
