import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Input() autoCancel = true;

  visible = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    });
  }

  doCancel(): void {
    if (this.autoCancel) {
      this.visible = false;
      this.cancel.emit();
    }
  }
}
