import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[uiClickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef) {
  }

  @Output('uiClickOutside') onClickOutside = new EventEmitter<void>();

  escKeyListener = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.onClickOutside.emit();
    }
  }

  clickListener = (event) => {
    if (!isSelfOrAncestorNode(this.element.nativeElement, event.target  as Node || event.srcElement)) {
      this.onClickOutside.emit();
    }
  }

  ngOnInit(): void {
    document.addEventListener('click', this.clickListener);
    document.addEventListener('keyup', this.escKeyListener);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.clickListener);
    document.removeEventListener('keyup', this.escKeyListener);
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
