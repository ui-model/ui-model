import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal-warning',
  template: require('./modal-warning.component.html'),
  styles: [require('./modal-warning.component.scss')],
})
export class ModalWarningComponent implements OnInit {

  constructor() {
  }

  @Output()
  close = new EventEmitter<void>();

  @Output()
  cancel = new EventEmitter<void>();

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  icon: string;

  ngOnInit(): void {
  }

}
