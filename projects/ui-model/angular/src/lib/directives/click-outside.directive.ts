import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { DocumentEventListener } from '../services/document-event-listener.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[uiClickOutside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef<Element>, private documentEventListener: DocumentEventListener) {
  }

  private subKeyup: Subscription;
  private subMouseUp: Subscription;


  @Output('uiClickOutside')
  clickOutside = new EventEmitter<void>();

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
