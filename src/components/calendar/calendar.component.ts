import {Component, OnInit} from "@angular/core";
import {Calendar} from "ui-model-angular";

@Component({
  selector: 'ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent extends Calendar implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
