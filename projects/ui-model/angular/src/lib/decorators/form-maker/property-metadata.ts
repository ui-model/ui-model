import { Type } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import { FormHooks } from '@angular/forms/src/model';
import { metaKeyModel } from '../../utils/constants';
import { ModelMetadata } from './model-metadata';
import { isNumber } from '../../validators/is-number.validator';
import { isBoolean } from '../../validators/is-boolean.validator';
import { Reflect } from 'core-js';


export interface PropertyDef {
  label?: string;
  css?: string;
  editor?: Type<Object> | string;
  editorInputs?: { [key: string]: any };
  viewer?: Type<Object> | string;
  viewerInputs?: { [key: string]: any };
  hidden?: boolean;
  readonly?: boolean;

  errors?: { [code: string]: string };
  arrayElementType?: Type<any>;
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];
  listeners?: ((c: AbstractControl) => void)[];
  defaultValue?: any;
  updateOn?: FormHooks;
}

export class PropertyMetadata implements PropertyDef {
  label?: string;
  css? = '';
  editor?: Type<Object> | string;
  editorInputs?: { [key: string]: any };
  viewer?: Type<Object> | string;
  viewerInputs?: { [key: string]: any };
  hidden = false;
  readonly = false;

  errors?: { [code: string]: string };
  arrayElementType?: Type<any>;
  validators: (ValidatorFn | Type<Validator>)[] = [];
  asyncValidators: (AsyncValidatorFn | Type<AsyncValidator>)[] = [];
  listeners: ((c: AbstractControl) => void)[] = [];
  defaultValue?: any;
  updateOn: FormHooks = 'change';

  name?: string;
  type?: Type<any>;
  groupModel?: ModelMetadata;

  get dataTypeValidators(): ValidatorFn[] {
    switch (this.type) {
      case Number:
        return [isNumber];
      case Boolean:
        return [isBoolean];
    }
  }

  get isGroup(): boolean {
    return Reflect.hasMetadata(metaKeyModel, this.type);
  }

  get isArray(): boolean {
    return this.type === Array;
  }

  get isControl(): boolean {
    return !this.isArray && !this.isGroup;
  }
}
