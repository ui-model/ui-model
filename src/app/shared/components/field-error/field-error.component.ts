import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent implements OnInit, OnDestroy {
  constructor() {
  }

  latestSubscription: Subscription;
  private _field: AbstractControl;

  get field(): AbstractControl {
    return this._field;
  }

  @Input() set field(value: AbstractControl) {
    if (value !== this._field) {
      this._field = value;
      if (this.latestSubscription) {
        this.latestSubscription.unsubscribe();
      }
      this.latestSubscription = value.statusChanges.subscribe(() => {
        this.errors = _.map(value.errors, (v, k) => ({key: k, value: v}));
      });
    }
  }

  errors: { key, value }[];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.latestSubscription) {
      this.latestSubscription.unsubscribe();
    }
  }
}
