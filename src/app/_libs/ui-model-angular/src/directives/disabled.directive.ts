import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '.disabled,[disabled]'
})
export class DisabledDirective {

  constructor(private element: ElementRef) {
    const e = element.nativeElement;
    e.disabled = false;
    e.classList.add('disabled');
    // cancel all events but mouseenter/mouseleave/mouseover/mouseout - they are necessary for tooltip
    e.addEventListener('click', preventDefault);
    e.addEventListener('mousedown', preventDefault);
    e.addEventListener('mouseup', preventDefault);
    e.addEventListener('mousewheel', preventDefault);
    e.addEventListener('dblclick', preventDefault);
    e.addEventListener('keydown', preventDefault);
    e.addEventListener('keyup', preventDefault);
    e.addEventListener('keypress', preventDefault);
    e.addEventListener('focus', preventDefault);
    e.addEventListener('touchcancel', preventDefault);
    e.addEventListener('touchend', preventDefault);
    e.addEventListener('touchenter', preventDefault);
    e.addEventListener('touchleave', preventDefault);
    e.addEventListener('touchmove', preventDefault);
    e.addEventListener('touchstart', preventDefault);
    e.addEventListener('pointerover', preventDefault);
    e.addEventListener('pointerenter', preventDefault);
    e.addEventListener('pointerdown', preventDefault);
    e.addEventListener('pointermove', preventDefault);
    e.addEventListener('pointerup', preventDefault);
    e.addEventListener('pointercancel', preventDefault);
    e.addEventListener('pointerout', preventDefault);
    e.addEventListener('pointerleave', preventDefault);
  }
}

function preventDefault(event) {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
}
