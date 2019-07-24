import { ElementRef } from '@angular/core';
import { AttributeTypeMap } from './attribute-type-map';

export function getAttr<K extends keyof AttributeTypeMap>(ref: ElementRef<Element>, name: K): AttributeTypeMap[K] {
  return ref.nativeElement.getAttribute(name) as any;
}

export function setAttr<K extends keyof AttributeTypeMap>(ref: ElementRef<Element>, name: string, value: AttributeTypeMap[K]): void {
  ref.nativeElement.setAttribute(name, value as any);
}

