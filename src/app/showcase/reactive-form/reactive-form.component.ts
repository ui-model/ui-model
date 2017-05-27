import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { maxValue, minValue } from '@ui-model/angular';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      basic: fb.group({
        age: [0, [Validators.required, minValue(10), maxValue(20)]],
      }),
      tags: fb.array([]),
    });
    this.form.setValue({name: 'Tom', basic: {age: 10}, tags: []});
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get basic(): AbstractControl {
    return this.form.get('basic');
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  newTag(): void {
    this.tags.push(new FormControl(['']));
  }

  removeTag(i: number): void {
    this.tags.removeAt(i);
  }

  form: FormGroup;

  ngOnInit(): void {

  }

}
