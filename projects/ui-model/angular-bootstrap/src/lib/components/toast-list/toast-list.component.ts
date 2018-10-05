import { Component, OnInit } from '@angular/core';
import { ToastService } from '@ui-model/angular';

@Component({
  selector: 'ui-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
})
export class ToastListComponent implements OnInit {

  constructor(public toast: ToastService) {
  }

  ngOnInit(): void {
  }
}
