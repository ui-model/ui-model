import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal-info',
  template: require('./modal-info.component.html'),
  styles: [require('./modal-info.component.scss')],
})
export class ModalInfoComponent implements OnInit {

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
