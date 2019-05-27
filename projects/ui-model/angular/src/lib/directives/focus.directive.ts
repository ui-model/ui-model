import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[uiFocus]',
})
export class FocusDirective {

  constructor(element: ElementRef<Element>) {
    this.element = element.nativeElement as HTMLElement;
  }

  @Output('uiFocusChange') focusChange = new EventEmitter<boolean>();
  private element: HTMLElement;

  get focus(): boolean | string {
    return this.element === document.activeElement;
  }

  @Input('uiFocus')
  set focus(value: boolean | string) {
    if (value === '' || value) {
      this.element.focus();
    }
  }

  @HostListener('focus')
  onFocus(): void {
    this.focusChange.emit(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.focusChange.emit(false);
  }
}
