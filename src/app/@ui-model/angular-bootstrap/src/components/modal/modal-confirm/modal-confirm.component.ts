import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal-confirm',
  template: require('./modal-confirm.component.html'),
  styles: [require('./modal-confirm.component.scss')],
})
export class ModalConfirmComponent implements OnInit {

  constructor() {
  }

  @Output()
  close = new EventEmitter<boolean>();

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
