import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[uiPreventDefault]',
})
export class PreventDefaultDirective {

  constructor() {
  }

  @HostListener('click', ['$event'])
  click($event: MouseEvent): void {
    $event.preventDefault();
  }
}
