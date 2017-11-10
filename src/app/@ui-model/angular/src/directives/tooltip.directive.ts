import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Rect } from '@ui-model/common';
import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[uiTooltip]',
})
export class TooltipDirective {
  constructor(private service: TooltipService, private element: ElementRef) {
  }

  @Input('uiTooltip') message: string | SafeHtml;

  @HostListener('mouseenter')
  show(): void {
    const rect = Rect.fromClientRect((this.element.nativeElement as Element).getBoundingClientRect());
    this.service.show(this.message, rect);
  }

  @HostListener('mouseleave', ['$event'])
  hide(event: MouseEvent): void {
    // for inspector: don't hide when holding ctrl key and alt key
    if (event.altKey && event.ctrlKey) {
      return;
    }
    this.service.hide();
  }
}
