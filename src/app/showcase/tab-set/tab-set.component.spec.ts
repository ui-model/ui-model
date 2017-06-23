import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetComponent } from './tab-set.component';
import { UiModelModule } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseTabSetComponent', () => {
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
