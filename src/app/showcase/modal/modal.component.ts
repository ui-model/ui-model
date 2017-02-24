import {Component, OnInit} from "@angular/core";
import {Toggle} from "ui-model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  toggle: Toggle = new Toggle();

  constructor() {
  }

  ngOnInit() {
  }
}
