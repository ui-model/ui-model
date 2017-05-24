import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();

  ngOnInit(): void {
  }

  doCancel(): void {
    this.cancel.emit();
  }
}
