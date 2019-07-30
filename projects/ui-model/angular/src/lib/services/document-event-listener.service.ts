import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface ListenerEntry<K extends keyof DocumentEventMap> {
  type: K;
  subject: Subject<DocumentEventMap[K]>;
  listener?: EventListenerOrEventListenerObject;
}

@Injectable({
  providedIn: 'root',
})
export class DocumentEventListener implements OnDestroy {
  constructor() {
    this.addEventListeners();
  }

  listeners: ListenerEntry<keyof DocumentEventMap>[] = [];

  private _keyup$ = new Subject<KeyboardEvent>();

  get keyup$(): Observable<KeyboardEvent> {
    return this._keyup$;
  }

  private _mouseup$ = new Subject<MouseEvent>();

  get mouseup$(): Observable<MouseEvent> {
    return this._mouseup$;
  }

  private _mousemove$ = new Subject<MouseEvent>();

  get mousemove$(): Observable<MouseEvent> {
    return this._mousemove$;
  }

  private _mousedown$ = new Subject<MouseEvent>();

  get mousedown$(): Observable<MouseEvent> {
    return this._mousedown$;
  }

  ngOnDestroy(): void {
    this.listeners.forEach(it => {
      if (it.listener) {
        document.removeEventListener(it.type, it.listener);
      }
      it.subject.complete();
    });
  }

  private addEventListeners() {
    this.listeners = [
      {
        type: 'mousedown',
        subject: this._mousedown$,
      },
      {
        type: 'mousemove',
        subject: this._mousemove$,
      },
      {
        type: 'mouseup',
        subject: this._mouseup$,
      },
      {
        type: 'keyup',
        subject: this._keyup$,
      },
    ];

    this.listeners.forEach(it => {
      it.listener = (event) => {
        it.subject.next(event);
      };
      document.addEventListener(it.type, it.listener);
    });
  }
}
