import { Component, Injector, OnInit } from '@angular/core';
import { ModalService } from '@ui-model/angular';

@Component({
  selector: 'ui-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements OnInit {

  constructor(public modal: ModalService, public injector: Injector) {
  }

  ngOnInit(): void {
  }

}
