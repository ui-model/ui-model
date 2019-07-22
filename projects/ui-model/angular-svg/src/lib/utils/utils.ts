import { ElementRef } from '@angular/core';

export function getAttr(ref: ElementRef<Element>, name: string): string {
  return ref.nativeElement.getAttribute(name);
}

export function setAttr(ref: ElementRef<Element>, name: string, value): void {
  ref.nativeElement.setAttribute(name, value);
}

