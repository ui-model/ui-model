import {Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[uiTypeAhead]',
  exportAs: 'uiTypeAhead',
})
export class TypeAheadDirective implements OnInit, OnDestroy {
  private typing = new Subject();

  @Output('uiTypeAheadSearch') search = new EventEmitter<any>();
  @Output('uiTypeAheadOpen') open = new EventEmitter<void>();
  @Output('uiTypeAheadClose') close = new EventEmitter<void>();

  @HostListener('keyup') keyup(): void {
    this.typing.next(this.element.nativeElement.value);
  }

  @HostListener('focus') focus(): void {
    this.keyup();
    this.open.emit();
  }

  @Input() delay = 200;

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    this.typing
      .debounceTime(this.delay)
      .subscribe((term) => {
        this.open.emit();
        this.search.emit(term);
      });
  }

  ngOnDestroy(): void {
    this.close.emit();
    this.typing.complete();
  }

}
