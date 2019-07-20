import { AfterContentInit, ContentChildren, Directive, OnDestroy, QueryList } from '@angular/core';
import { AbstractControl, NgControl, NgForm } from '@angular/forms';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import { nextTick } from '../utils/next-tick';

@Directive({
  selector: '[uiFormField]',
})
export class FormFieldDirective implements AfterContentInit, OnDestroy {
  constructor() {
  }

  controls: AbstractControl[] = [];
  private changes$$ = new Subject<AbstractControl[]>();
  private subChanges: Subscription;
  @ContentChildren(NgControl)
  private ngControls: QueryList<NgControl>;
  @ContentChildren(NgForm)
  private ngForms: QueryList<NgForm>;

  get changes$(): Observable<AbstractControl[]> {
    return this.changes$$.asObservable();
  }

  ngAfterContentInit(): void {
    this.subChanges = merge(this.ngForms.changes, this.ngControls.changes).subscribe(() => {
      this.update();
    });
    this.update();
  }

  ngOnDestroy(): void {
    this.subChanges.unsubscribe();
    this.changes$$.complete();
  }

  private update() {
    // 模板驱动表单有时序问题，因此需要推到下一个变更检测周期去执行
    nextTick(() => {
      this.controls = [
        ...this.ngControls.map(it => it.control),
        ...this.ngForms.map(it => it.form),
      ];
      this.changes$$.next(this.controls);
    });
  }
}
