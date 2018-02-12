import { Component, Input, OnInit } from '@angular/core';
import { Modal, ModalService } from '@ui-model/angular';

@Component({
  selector: 'app-modal-custom',
  templateUrl: './modal-custom.component.html',
  styleUrls: ['./modal-custom.component.scss'],
})
export class ModalCustomComponent implements OnInit {
  constructor(private modalService: ModalService) {
  }

  @Input()
  modal: Modal;

  @Input()
  name: string;

  ngOnInit(): void {
  }

  close(result: any): void {
    this.modalService.close(this.modal, result);
  }

  cancel(): void {
    this.modalService.cancel(this.modal);
  }
}
