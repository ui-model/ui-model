import { Component, OnInit } from '@angular/core';
import { FieldMetadataDirective } from '@ui-model/angular';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-agree-license-editor',
  templateUrl: './agree-license-editor.component.html',
  styleUrls: ['./agree-license-editor.component.scss'],
})
export class AgreeLicenseEditorComponent implements OnInit {

  constructor(group: FormGroupDirective, public field: FieldMetadataDirective) {
    this.group = group.control;
  }

  group: FormGroup;

  ngOnInit(): void {
  }

}
