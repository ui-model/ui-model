import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';

import { TabSetComponent } from './tab-set.component';

describe('showcase > ShowcaseTabSetComponent', () => {
  let component: TabSetComponent;
  let fixture: ComponentFixture<TabSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSetComponent],
      imports: [UiModelModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
