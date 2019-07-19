import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Rect } from '@ui-model/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowMeasureService implements OnDestroy {
  constructor() {
    this.sub = this.resize$.subscribe(() => this.update());
    this.update();
    window.addEventListener('resize', () => {
      this.resize$$.emit(window);
    });
  }

  innerRect = new Rect();
  outerRect = new Rect();
  private sub: Subscription;
  private resize$$ = new EventEmitter<Window>();

  get resize$(): Observable<Window> {
    return this.resize$$.asObservable();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private update(): void {
    this.innerRect.height = window.innerHeight;
    this.innerRect.width = window.innerWidth;
    this.outerRect.height = window.outerHeight;
    this.outerRect.width = window.outerWidth;
  }
}
