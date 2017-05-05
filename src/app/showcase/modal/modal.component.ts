import { Component, OnInit } from '@angular/core';
import { Toggle } from '@ui-model/core';
import { Modal, ModalService } from '@ui-model/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modal: ModalService) {
  }

  toggle = new Toggle();

  ngOnInit(): void {
  }

  open(): void {
    this.modal.open(Modal.tip('Test'));
  }

}
