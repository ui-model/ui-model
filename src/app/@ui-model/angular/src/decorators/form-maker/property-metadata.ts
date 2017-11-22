import { Type } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import { FormHooks } from '@angular/forms/src/model';
import { ModelMetadata } from './model-metadata';

export interface PropertyMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  dataTypeValidators?: ValidatorFn[];
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];
  listeners?: ((c: AbstractControl) => void)[];
  defaultValue?: any;
  updateOn?: FormHooks;

  label?: string;
  css?: string;
  editor?: Type<Object> | string;
  editorInputs?: { [key: string]: any };
  errors?: { [code: string]: string };

  isGroup?: boolean;
  groupModel?: ModelMetadata;
  isArray?: boolean;
  isControl?: boolean;
}
