import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[uiDisabled]',
})
export class DisabledDirective {

  constructor(private element: ElementRef<Element>) {
    const e = this.element.nativeElement;
    // cancel all events but mouseenter/mouseleave/mouseover/mouseout - they are necessary for tooltip
    e.addEventListener('click', this.preventDefault);
    e.addEventListener('mousedown', this.preventDefault);
    e.addEventListener('mouseup', this.preventDefault);
    e.addEventListener('mousewheel', this.preventDefault);
    e.addEventListener('dblclick', this.preventDefault);
    e.addEventListener('keydown', this.preventDefault);
    e.addEventListener('keyup', this.preventDefault);
    e.addEventListener('keypress', this.preventDefault);
    e.addEventListener('focus', this.preventDefault);
    e.addEventListener('touchcancel', this.preventDefault);
    e.addEventListener('touchend', this.preventDefault);
    e.addEventListener('touchenter', this.preventDefault);
    e.addEventListener('touchleave', this.preventDefault);
    e.addEventListener('touchmove', this.preventDefault);
    e.addEventListener('touchstart', this.preventDefault);
    e.addEventListener('pointerover', this.preventDefault);
    e.addEventListener('pointerenter', this.preventDefault);
    e.addEventListener('pointerdown', this.preventDefault);
    e.addEventListener('pointermove', this.preventDefault);
    e.addEventListener('pointerup', this.preventDefault);
    e.addEventListener('pointercancel', this.preventDefault);
    e.addEventListener('pointerout', this.preventDefault);
    e.addEventListener('pointerleave', this.preventDefault);
  }

  @HostBinding('class.disabled') classDisabled;

  private _disabled: boolean | string = true;

  get disabled(): boolean | string {
    return this._disabled;
  }

  @Input('uiDisabled')
  set disabled(value: boolean | string) {
    this._disabled = value || value === '';
    this.classDisabled = this._disabled;
  }

  preventDefault = (event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  };
}
