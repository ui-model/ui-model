import { Type } from '@angular/core';

export enum ModalType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Confirm = 'confirm',
  Prompt = 'prompt',
  Form = 'form',
  Custom = 'custom',
}

export class Modal {
  title?: string;
  message?: string;
  icon?: string;
  type?: ModalType;
  data?: any;
  customComponent?: Type<any>;
  customInputs?: { [key: string]: any };
}
