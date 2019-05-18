import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[uiClickOutside]',
})
export class ClickOutsideDirective {

  @Output('uiClickOutside') clickOutside = new EventEmitter<void>();

  constructor(private element: ElementRef) {
  }

  // TODO: 移到 service 中，以免挂多次事件
  @HostListener('document:keyup', ['$event'])
  escKeyListener(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.clickOutside.emit();
    }
  }

  @HostListener('document:mouseup', ['$event'])
  clickListener(event: MouseEvent): void {
    if (!isSelfOrAncestorNode(this.element.nativeElement, (event.target || event.srcElement) as Node)) {
      this.clickOutside.emit();
    }
  }
}

function isSelfOrAncestorNode(ancestor: Node, node: Node): boolean {
  while (node) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
