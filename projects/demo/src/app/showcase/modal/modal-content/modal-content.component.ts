import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {

  @Input() title: string;
  @Output() cancel = new EventEmitter<void>();

  ngOnInit(): void {
  }
}
