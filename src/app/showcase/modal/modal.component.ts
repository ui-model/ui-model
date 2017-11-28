import { Component, OnInit } from '@angular/core';
import { FormMaker, ModalService, ModalTypes } from '@ui-model/angular';
import { Toggle } from '@ui-model/core';
import { FormModel } from './_models/form.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modal: ModalService, private maker: FormMaker) {
  }

  toggle = new Toggle();

  ngOnInit(): void {
  }

  info(): void {
    this.modal.open({
      type: ModalTypes.Info,
      message: 'Hello, world!',
      title: 'Information',
      icon: 'fa fa-info-circle',
    });
  }

  info2(): void {
    this.modal.info('Hello, world!');
  }

  success(): void {
    this.modal.open({
      type: ModalTypes.Success,
      message: 'Hello, world!',
      title: 'Success',
      icon: 'fa fa-check-circle',
    });
  }

  success2(): void {
    this.modal.success('Hello, world!');
  }

  warning(): void {
    this.modal.open({
      type: ModalTypes.Warning,
      message: 'Hello, world!',
      title: 'Warning',
      icon: 'fa fa-exclamation-circle',
    });
  }

  warning2(): void {
    this.modal.warning('Hello, world!');
  }

  error(): void {
    this.modal.open({
      type: ModalTypes.Error,
      message: 'Hello, world!',
      title: 'Danger!',
      icon: 'fa fa-times-circle',
    });
  }

  error2(): void {
    this.modal.error('Hello, world!');
  }

  confirm(): void {
    const dialog = this.modal.open({
      type: ModalTypes.Confirm,
      message: 'Do you want to delete this file?',
      title: 'Confirm',
      icon: 'fa fa-check-circle-o',
    });
    dialog.subscribe((confirmed) => {
      alert('result: ' + confirmed);
    });
  }

  confirm2(): void {
    const dialog = this.modal.confirm('Do you want to delete this file?');
    dialog.subscribe((confirmed) => {
      alert('result: ' + confirmed);
    });
  }

  prompt(): void {
    const dialog = this.modal.open({
      type: ModalTypes.Prompt,
      message: 'Please enter your name: ',
      title: 'Prompt',
      icon: 'fa fa-keyboard-o',
    });
    dialog.subscribe((result) => {
      alert('result: ' + result);
    });
  }

  prompt2(): void {
    const dialog = this.modal.prompt('Please enter your name: ', 'Ralph WANG');
    dialog.subscribe((result) => {
      alert('result: ' + result);
    });
  }

  form(): void {
    const formGroup = this.maker.createFromModel(FormModel);
    const dialog = this.modal.open({
      type: ModalTypes.Form,
      message: 'Please fill in this form: ',
      title: 'Prompt with form',
      icon: 'fa fa-table',
      data: formGroup,
    });
    dialog.subscribe((result) => {
      alert('result: ' + JSON.stringify(result));
    });
  }

  form2(): void {
    const formGroup = this.maker.createFromModel(FormModel);
    const dialog = this.modal.form('Please fill in this form: ', formGroup);
    dialog.subscribe((result) => {
      alert('result: ' + JSON.stringify(result));
    });
  }
}
