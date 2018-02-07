import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-modal-form',
  template: require('./modal-form.component.html'),
  styles: [require('./modal-form.component.scss')],
})
export class ModalFormComponent implements OnInit {

  constructor() {
  }

  @Output()
  close = new EventEmitter<any>();

  @Output()
  cancel = new EventEmitter<void>();

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  group: FormGroup;

  @Input()
  icon: string;

  ngOnInit(): void {
  }

}
