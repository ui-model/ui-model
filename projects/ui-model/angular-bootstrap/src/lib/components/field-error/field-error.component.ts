import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormFieldDirective } from '../../../../../angular/src/lib/directives/form-field.directive';

@Component({
  selector: 'ui-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent implements OnInit {
  constructor(@Optional() private formField: FormFieldDirective) {
  }

  @Input()
  messages: Record<string, string>;

  controls: AbstractControl[];

  get field(): AbstractControl {
    return this.controls[0];
  }

  @Input()
  set field(value: AbstractControl) {
    this.controls = [value];
  }

  ngOnInit(): void {
    if (!this.formField) {
      return;
    }
    this.formField.changes$.subscribe(controls => this.controls = controls);
  }
}
