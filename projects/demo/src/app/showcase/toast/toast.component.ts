import { Component, OnInit } from '@angular/core';
import { ToastModel, ToastService } from '@ui-model/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(private toastService: ToastService<ToastModel>) {
  }

  ngOnInit(): void {
  }

  show(): void {
    this.toastService.show('Save succeeded!', 4000);
  }
}
