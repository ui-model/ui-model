import {Directive, Input, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[uiFocus]'
})
export class FocusDirective {
  constructor(element: ElementRef) {
    this.element = element.nativeElement as HTMLElement;
  }

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

  @Output('uiFocusChange') focusChange = new EventEmitter<boolean>();
  @HostListener('focus')
  onFocus(): void {
    this.focusChange.emit(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.focusChange.emit(false);
  }
}
