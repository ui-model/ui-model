export enum ModalTypes {
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
  message: string;
  icon?: string;
  type: ModalTypes = ModalTypes.Custom;
  data?: any;
}
