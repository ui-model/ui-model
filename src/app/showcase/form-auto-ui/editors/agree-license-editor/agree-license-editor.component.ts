import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-agree-license-editor',
  templateUrl: './agree-license-editor.component.html',
  styleUrls: ['./agree-license-editor.component.scss'],
})
export class AgreeLicenseEditorComponent implements OnInit {

  constructor(group: FormGroupDirective) {
    this.group = group.control;
  }

  group: FormGroup;

  @Input() name: string;

  ngOnInit(): void {
  }

}
