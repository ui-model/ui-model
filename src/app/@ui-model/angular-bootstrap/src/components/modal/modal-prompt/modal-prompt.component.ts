import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMaker, Model, Property } from '@ui-model/angular';

@Model()
class PromptModel {
  @Property({
    label: '',
  })
  result: string;
}

@Component({
  selector: 'ui-modal-prompt',
  template: require('./modal-prompt.component.html'),
  styles: [require('./modal-prompt.component.scss')],
})
export class ModalPromptComponent implements OnInit {
  constructor(private formMaker: FormMaker) {
    this.formGroup = this.formMaker.createFromModel(PromptModel);
  }

  formGroup: FormGroup;

  @Output()
  close = new EventEmitter<any>();

  @Output()
  cancel = new EventEmitter<void>();

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  icon: string;

  get defaultValue(): string {
    return this.formGroup.value && this.formGroup.value.result;
  }

  @Input()
  set defaultValue(value: string) {
    this.formGroup.setValue({result: value || ''});
  }

  ngOnInit(): void {
  }
}
