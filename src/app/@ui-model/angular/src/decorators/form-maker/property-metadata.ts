import { Type } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import { FormHooks } from '@angular/forms/src/model';
import { ModelMetadata } from './model-metadata';

export interface PropertyMetadata {
  label?: string;
  css?: string;
  editor?: Type<Object> | string;
  editorInputs?: { [key: string]: any };
  hidden?: boolean;

  errors?: { [code: string]: string };
  arrayElementType?: Type<any>;
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];
  listeners?: ((c: AbstractControl) => void)[];
  defaultValue?: any;
  updateOn?: FormHooks;

  name?: string;
  type?: Type<any>;
  dataTypeValidators?: ValidatorFn[];
  groupModel?: ModelMetadata;
  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
