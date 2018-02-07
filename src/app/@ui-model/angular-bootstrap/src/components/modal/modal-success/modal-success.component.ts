import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal-success',
  template: require('./modal-success.component.html'),
  styles: [require('./modal-success.component.scss')],
})
export class ModalSuccessComponent implements OnInit {

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
