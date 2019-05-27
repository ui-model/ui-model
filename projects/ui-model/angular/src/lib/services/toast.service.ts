import { Injectable } from '@angular/core';
import { isString } from 'util';
import { ToastModel } from './toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService<T extends ToastModel = ToastModel> {

  constructor() {
  }

  items: T[] = [];

  get isEmpty(): boolean {
    return !this.items || !this.items.length;
  }

  show(message: string | T, timeout?: number): Promise<void>;

  show(message: any, timeout: number = 2000): Promise<void> {
    return new Promise<void>((resolve) => {
      const item = isString(message) ? {
        message,
        duration: timeout,
      } : Object.assign({}, message, { duration: timeout });
      this.items.push(item);
      const timer = setInterval(() => {
        const index = this.items.indexOf(item);
        if (index !== -1) {
          item.duration -= 1000;
          if (item.duration <= 0) {
            this.items.splice(index, 1);
            clearInterval(timer);
          }
        }
        resolve();
      }, 500);
    });
  }
}
