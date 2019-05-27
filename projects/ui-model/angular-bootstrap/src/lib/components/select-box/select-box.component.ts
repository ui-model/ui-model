import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectValueAccessor } from '@ui-model/angular';

@Component({
  selector: 'ui-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SelectBoxComponent },
  ],
})
export class SelectBoxComponent<T> extends SelectValueAccessor<T> implements OnInit {

  constructor() {
    super();
  }

  @Input() options: T[];

  ngOnInit(): void {
  }
}
