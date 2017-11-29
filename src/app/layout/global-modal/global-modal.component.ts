import { Component, OnInit } from '@angular/core';
import { ModalService } from '@ui-model/angular';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.scss'],
})
export class GlobalModalComponent implements OnInit {

  constructor(public modal: ModalService) {
  }

  ngOnInit(): void {
  }
}
