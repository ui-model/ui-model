import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentEventListener } from '../services/document-event-listener.service';

@Directive({
  selector: '[uiClickOutside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef<Element>, private documentEventListener: DocumentEventListener) {
  }

  @Output('uiClickOutside')
  clickOutside = new EventEmitter<void>();
  private subKeyup: Subscription;
  private subMouseUp: Subscription;

  escKeyListener(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.clickOutside.emit();
    }
  }

  clickListener(event: MouseEvent): void {
    if (!isSelfOrAncestorNode(this.element.nativeElement, event.target as Node)) {
      this.clickOutside.emit();
    }
  }

  ngOnInit(): void {
    this.subKeyup = this.documentEventListener.keyup$.subscribe(event => this.escKeyListener(event));
    this.subMouseUp = this.documentEventListener.mouseup$.subscribe(event => this.clickListener(event));
  }

  ngOnDestroy(): void {
    this.subKeyup.unsubscribe();
    this.subMouseUp.unsubscribe();
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
