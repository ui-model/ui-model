import { Component, OnInit } from '@angular/core';
import { FormMaker } from '@ui-model/angular';
import { RegisterModel } from './models/register-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-auto-ui',
  templateUrl: './form-auto-ui.component.html',
  styleUrls: ['./form-auto-ui.component.scss'],
})
export class FormAutoUiComponent implements OnInit {

  constructor(private maker: FormMaker<RegisterModel>) {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.maker.createFromModel(RegisterModel);
  }

}
