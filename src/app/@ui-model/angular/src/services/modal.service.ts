import {Injectable} from '@angular/core';

export enum ModalType {
  Tip,
  Warning,
  Error,
  Prompt,
  Confirm,
}
export class Modal {
  title: string;
  message: string;
  icon: string;
  type: ModalType;

  static tip(message: string, title: string = 'Tip'): Modal {
    const result = new Modal();
    result.message = message;
    result.title = title;
    result.type = ModalType.Tip;
    return result;
  }
}
@Injectable()
export class ModalService {

  constructor() {
  }

  items = [];

  open(modal: Modal): void {
    this.items.push(modal);
  }

  close(modal: Modal): void {
    this.items = this.items.filter(item => item !== modal);
  }
}
