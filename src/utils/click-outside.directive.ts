import { Directive, Output, EventEmitter, OnDestroy, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiClickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  @Output('uiClickOutside') onClickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      if (!isSelfOrAncestorNode(this.element.nativeElement, event.srcElement)) {
        this.onClickOutside.emit();
      }
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('click');
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
