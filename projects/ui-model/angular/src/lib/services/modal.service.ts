import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Modal, ModalType } from './modal.model';

@Injectable({ providedIn: 'root' })
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
      type: ModalType.Info,
    });
  }

  success(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Success,
    });
  }

  warning(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Warning,
    });
  }

  error(message: string, title: string = ''): Observable<void> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Error,
    });
  }

  danger(message: string, title: string = ''): Observable<void> {
    return this.error(message, title);
  }

  confirm(message: string, title: string = ''): Observable<boolean> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Confirm,
    });
  }

  prompt(message: string, defaultValue: string = '', title: string = ''): Observable<string> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Prompt,
      data: defaultValue,
    });
  }

  form(message: string, formGroup?: FormGroup, title: string = ''): Observable<object> {
    return this.open({
      title: title,
      message: message,
      type: ModalType.Form,
      data: formGroup,
    });
  }

  custom(component: Type<any>, inputs?: { [key: string]: any }): Observable<any> {
    return this.open({
      type: ModalType.Custom,
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
