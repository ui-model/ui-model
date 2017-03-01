import {Directive, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {Toggle} from 'ui-model';

@Directive({
  selector: '[uiToggle]',
  inputs: ['isOn', 'isOff'],
  exportAs: 'uiToggle'
})
export class ToggleDirective extends Toggle implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  @Output() isOnChange = new EventEmitter();
  @Output() isOffChange = new EventEmitter();

  sub: any;

  ngOnInit(): void {
    this.sub = this.changes.subscribe(() => {
      this.isOnChange.emit(this.isOn);
      this.isOffChange.emit(this.isOff);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
