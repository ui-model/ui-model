import {Component, OnInit} from '@angular/core';
import {Toggle} from 'ui-model';
import {ModalService, Modal} from 'ui-model-angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modal: ModalService) {
  }

  toggle = new Toggle();

  ngOnInit() {
  }

  open(): void {
    this.modal.open(Modal.tip('Test'));
  }

}
