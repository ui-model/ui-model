import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[uiClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private element: ElementRef) {
  }

  @Output('uiClickOutside') onClickOutside = new EventEmitter<void>();

  @HostListener('document:keyup', ['$event'])
  escKeyListener(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.onClickOutside.emit();
    }
  }

  @HostListener('document:mouseup', ['$event'])
  clickListener(event: MouseEvent): void {
    if (!isSelfOrAncestorNode(this.element.nativeElement, event.target as Node || event.srcElement)) {
      this.onClickOutside.emit();
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
