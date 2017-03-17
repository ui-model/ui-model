import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @Input() title: string;
  @Output() close = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  ngOnInit() {
    console.log('Initializing inner content...');
  }

  time = 0;

  doClose() {
    this.time = 5;
    Observable.interval(500).take(5).subscribe(
      (time) => this.time--,
      null,
      () => {
        this.close.emit();
      }
    );
  }

  get countDown(): string {
    if (!this.time) {
      return '';
    } else {
      return `(${this.time})`;
    }
  }
}
