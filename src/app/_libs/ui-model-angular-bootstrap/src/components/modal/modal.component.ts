import {Component, OnInit, Output, EventEmitter, trigger, state, style, transition, animate} from "@angular/core";
import {Animations} from "../../../../ui-model-angular/src/utils/animations";

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [
    Animations.slide()
  ]
})
export class ModalComponent implements OnInit {

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  visible = false;
  constructor() {
  }

  ngOnInit() {
    setTimeout(()=> {
      this.visible = true;
    });
  }
}
