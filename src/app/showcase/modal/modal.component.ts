import { Component, OnInit } from '@angular/core';
import { FormMaker, ModalService } from '@ui-model/angular';
import { Toggle } from '@ui-model/core';
import { FormModel } from './_models/form.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modal: ModalService<any>, private maker: FormMaker) {
  }

  toggle = new Toggle();

  ngOnInit(): void {
  }

  info(): void {
    this.modal.open({
      type: 'info',
      message: 'Hello, world!',
      title: 'Information',
      icon: 'fa fa-info-circle',
    });
  }

  success(): void {
    this.modal.open({
      type: 'success',
      message: 'Hello, world!',
      title: 'Success',
      icon: 'fa fa-check-circle',
    });
  }

  warning(): void {
    this.modal.open({
      type: 'warning',
      message: 'Hello, world!',
      title: 'Warning',
      icon: 'fa fa-exclamation-circle',
    });
  }

  error(): void {
    this.modal.open({
      type: 'error',
      message: 'Hello, world!',
      title: 'Danger!',
      icon: 'fa fa-times-circle',
    });
  }

  confirm(): void {
    const dialog = this.modal.open({
      type: 'confirm',
      message: 'Do you want to delete this file?',
      title: 'Confirm',
      icon: 'fa fa-check-circle-o',
    });
    dialog.subscribe((confirmed) => {
      alert('result: ' + confirmed);
    });
  }

  prompt(): void {
    const dialog = this.modal.open({
      type: 'prompt',
      message: 'Please enter your name: ',
      title: 'Prompt',
      icon: 'fa fa-keyboard-o',
    });
    dialog.subscribe((result) => {
      alert('result: ' + result);
    });
  }

  form(): void {
    const formGroup = this.maker.createFromModel(FormModel);
    const dialog = this.modal.open({
      type: 'form',
      message: 'Please fill in this form: ',
      title: 'Prompt with form',
      icon: 'fa fa-table',
      data: formGroup,
    });
    dialog.subscribe((result) => {
      alert('result: ' + JSON.stringify(result));
    });
  }

}
