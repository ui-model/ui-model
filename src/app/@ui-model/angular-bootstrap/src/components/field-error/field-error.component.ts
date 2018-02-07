import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormGroupDirective, FormGroupName } from '@angular/forms';

@Component({
  selector: 'ui-field-error',
  template: require('./field-error.component.html'),
  styles: [require('./field-error.component.scss')],
})
export class FieldErrorComponent implements OnInit {
  constructor(@Optional() private group: FormGroupName, @Optional() private form: FormGroupDirective) {
  }

  @Input() field: AbstractControl;
  @Input() messages: { [key: string]: string };

  private _fieldName: string;

  get fieldName(): string {
    return this._fieldName;
  }

  @Input() set fieldName(value: string) {
    if (this._fieldName !== value) {
      this._fieldName = value;
      this.fieldNameChanged();
    }
  }

  fieldNameChanged(): void {
    if (!this.fieldName) {
      return;
    }
    if (this.group) {
      this.field = this.group.control.get(this.fieldName);
    } else if (this.form) {
      this.field = this.form.control.get(this.fieldName);
    }
  }

  ngOnInit(): void {
    this.fieldNameChanged();
  }
}
