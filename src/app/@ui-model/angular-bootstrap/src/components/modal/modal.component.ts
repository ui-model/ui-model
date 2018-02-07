import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal',
  template: require('./modal.component.html'),
  styles: [require('./modal.component.scss')],
})
export class ModalComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();

  ngOnInit(): void {
  }

  doCancel(): void {
    this.cancel.emit();
  }
}
