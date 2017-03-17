import {Component, ViewChildren, QueryList, OnInit} from '@angular/core';
import {NgModel, NgModelGroup} from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
})
export class FormSectionComponent implements OnInit {

  constructor(private group: NgModelGroup) {
  }

  @ViewChildren(NgModel) models: QueryList<NgModel>;

  ngOnInit() {
    Promise.resolve().then(() => {
      this.models.forEach((model) => {
        this.group.control.addControl(model.name, model.control);
      });
    });
  }

}
