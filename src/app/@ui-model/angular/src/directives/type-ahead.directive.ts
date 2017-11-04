import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[uiTypeAhead]',
  exportAs: 'uiTypeAhead',
})
export class TypeAheadDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef) {
  }

  private typing = new Subject();

  @Output('uiTypeAheadSearch') search = new EventEmitter<any>();
  @Output('uiTypeAheadOpen') open = new EventEmitter<void>();
  @Output('uiTypeAheadClose') close = new EventEmitter<void>();

  @HostListener('keyup')
  keyup(): void {
    this.typing.next(this.element.nativeElement.value);
  }

  @HostListener('focus')
  focus(): void {
    this.keyup();
    this.open.emit();
  }

  @Input() delay = 200;

  ngOnInit(): void {
    this.typing.pipe(
      debounceTime(this.delay),
    ).subscribe((term) => {
      this.open.emit();
      this.search.emit(term);
    });
  }

  ngOnDestroy(): void {
    this.close.emit();
    this.typing.complete();
  }
}
