import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasureDirective } from '@ui-model/angular';

import { InfiniteScrollComponent } from './infinite-scroll.component';

describe('showcase > ShowcaseInfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfiniteScrollComponent, MeasureDirective],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
