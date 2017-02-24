import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }
}
