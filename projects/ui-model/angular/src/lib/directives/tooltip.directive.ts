import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Rect } from '@ui-model/core';
import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[uiTooltip]',
})
export class TooltipDirective {

  constructor(private service: TooltipService, private elementRef: ElementRef<Element>) {
  }

  @Input('uiTooltip') message: string | SafeHtml;

  private get fallbackMessage(): string {
    const element = this.elementRef.nativeElement;
    return element.getAttribute('title') ||
      element.getAttribute('placeholder') ||
      element.getAttribute('alt');
  }

  @HostListener('mouseenter')
  show(): void {
    const rect = Rect.fromClientRect(this.elementRef.nativeElement.getBoundingClientRect());
    const message = this.message || this.fallbackMessage;
    if (message) {
      this.service.show(message, rect);
    }
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
