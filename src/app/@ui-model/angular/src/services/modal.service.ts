import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Modal } from './modal.model';

@Injectable()
export class ModalService<T> {

  constructor() {
  }

  events: Subject<T>[] = [];
  items: Modal[] = [];

  open(modal: Modal): Observable<T> {
    this.items.push(modal);
    const subject = new Subject<T>();
    this.events.push(subject);
    return subject.asObservable();
  }

  close(modal: Modal, result: T): void {
    const subject = this.subjectOf(modal);
    subject.next(result);
    this.remove(modal);
  }

  cancel(modal: Modal): void {
    this.remove(modal);
  }

  private subjectOf(modal: Modal): Subject<T> {
    const index = this.items.indexOf(modal);
    return this.events[index];
  }

  private remove(modal: Modal): void {
    const index = this.items.indexOf(modal);
    const subject = this.events[index];
    subject.complete();
    this.items.splice(index, 1);
    this.events.splice(index, 1);
  }
}
