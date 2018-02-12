import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Modal, ModalTypes } from './modal.model';

@Injectable()
export class ModalService {

  constructor() {
  }

  events: Subject<any>[] = [];
  items: Modal[] = [];

  open(modal: Modal): Observable<any> {
    this.items.push(modal);
    const subject = new Subject<any>();
    this.events.push(subject);
    return subject.asObservable();
  }

  close(modal: Modal, result: any): void {
    const subject = this.subjectOf(modal);
    subject.next(result);
    this.remove(modal);
  }

  cancel(modal: Modal): void {
    this.remove(modal);
  }


  info(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Info,
    });
  }

  success(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Success,
    });
  }

  warning(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Warning,
    });
  }

  error(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Error,
    });
  }

  danger(message: string, title: string = ''): Observable<void> {
    return this.error(message, title);
  }

  confirm(message: string, title: string = ''): Observable<boolean> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Confirm,
    });
  }

  prompt(message: string, defaultValue: string = '', title: string = ''): Observable<string> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Prompt,
      data: defaultValue,
    });
  }

  form(message: string, formGroup?: FormGroup, title: string = ''): Observable<object> {
    return this.open({
      title: title,
      message: message,
      type: ModalTypes.Form,
      data: formGroup,
    });
  }

  custom(component: Type<any>, inputs?: { [key: string]: any }): Observable<any> {
    return this.open({
      type: ModalTypes.Custom,
      customComponent: component,
      customInputs: inputs,
    });
  }

  private subjectOf(modal: Modal): Subject<any> {
    const index = this.items.indexOf(modal);
    return this.events[index];
  }

  private remove(modal: Modal): void {
    const index = this.items.indexOf(modal);
    if (index === -1) {
      return;
    }
    const subject = this.events[index];
    subject.complete();
    this.items.splice(index, 1);
    this.events.splice(index, 1);
  }
}
