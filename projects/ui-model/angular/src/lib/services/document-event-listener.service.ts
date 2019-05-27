import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentEventListener implements OnDestroy {
  constructor() {
    document.addEventListener('mouseup', ($event) => {
      this.mouseup$$.next($event);
    });
    document.addEventListener('keyup', ($event) => {
      this.keyup$$.next($event);
    });
  }

  private mouseup$$ = new Subject<MouseEvent>();
  private keyup$$ = new Subject<KeyboardEvent>();

  get mouseup$(): Observable<MouseEvent> {
    return this.mouseup$$.asObservable();
  }

  get keyup$(): Observable<KeyboardEvent> {
    return this.keyup$$.asObservable();
  }

  ngOnDestroy(): void {
    this.mouseup$$.complete();
    this.keyup$$.complete();
  }
}
