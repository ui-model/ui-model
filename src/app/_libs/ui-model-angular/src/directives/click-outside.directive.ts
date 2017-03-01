import {Directive, Output, EventEmitter, OnDestroy, OnInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[uiClickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  @Output('uiClickOutside') onClickOutside = new EventEmitter();

  constructor(private element: ElementRef) {

  }

  eventListener = (event) => {
    if (!isSelfOrAncestorNode(this.element.nativeElement, event.target  as Node || event.srcElement)) {
      this.onClickOutside.emit();
    }
  };

  ngOnInit(): void {
    document.addEventListener('click', this.eventListener);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.eventListener);
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
