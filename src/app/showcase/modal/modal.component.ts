import { Component, OnInit } from '@angular/core';
import { FormMaker, ModalService, ModalType } from '@ui-model/angular';
import { Toggle } from '@ui-model/common';
import { FormModel } from './_models/form.model';
import { ModalCustomComponent } from './modal-custom/modal-custom.component';

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
      type: ModalType.Info,
      message: 'Hello, world!',
      title: 'Information',
      icon: 'fa-info-circle',
    });
  }

  info2(): void {
    this.modal.info('Hello, world!');
  }

  success(): void {
    this.modal.open({
      type: ModalType.Success,
      message: 'Hello, world!',
      title: 'Success',
      icon: 'fa-check-circle',
    });
  }

  success2(): void {
    this.modal.success('Hello, world!');
  }

  warning(): void {
    this.modal.open({
      type: ModalType.Warning,
      message: 'Hello, world!',
      title: 'Warning',
      icon: 'fa-exclamation-circle',
    });
  }

  warning2(): void {
    this.modal.warning('Hello, world!');
  }

  error(): void {
    this.modal.open({
      type: ModalType.Error,
      message: 'Hello, world!',
      title: 'Danger!',
      icon: 'fa-times-circle',
    });
  }

  error2(): void {
    this.modal.error('Hello, world!');
  }

  confirm(): void {
    const dialog = this.modal.open({
      type: ModalType.Confirm,
      message: 'Do you want to delete this file?',
      title: 'Confirm',
      icon: 'fa-check-circle-o',
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
      type: ModalType.Prompt,
      message: 'Please enter your name: ',
      title: 'Prompt',
      icon: 'fa-keyboard-o',
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
      type: ModalType.Form,
      message: 'Please fill in this form: ',
      title: 'Prompt with form',
      icon: 'fa-table',
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

  custom(): void {
    const dialog = this.modal.custom(ModalCustomComponent, { name: 'wzc' });
    dialog.subscribe((result) => {
      alert('result is \n' + JSON.stringify(result));
    });
  }
}
