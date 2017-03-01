import {Component, OnInit} from '@angular/core';
import {ModalService} from 'ui-model-angular';

@Component({
  selector: 'ui-app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.scss']
})
export class GlobalModalComponent implements OnInit {

  constructor(public modal: ModalService) {
  }

  ngOnInit() {
  }
}
