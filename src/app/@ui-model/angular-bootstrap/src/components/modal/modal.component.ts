import {Component, OnInit, Output, EventEmitter, transition, animate, style, state, trigger} from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [
    trigger('slide', [
      state('void', style({
        transform: 'translateY(-100%)',
      })),
      state('*', style({
        transform: 'translateY(0)',
      })),
      transition(':enter', animate(300 + 'ms')),
      transition(':leave', animate(100 + 'ms')),
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();

  visible = false;

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    });
  }
}
