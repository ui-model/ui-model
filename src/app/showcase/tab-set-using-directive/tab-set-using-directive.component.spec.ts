import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetUsingDirectiveComponent } from './tab-set-using-directive.component';
import { UiModelModule } from '@ui-model/angular';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseTabSetUsingDirectiveComponent', () => {
  let component: TabSetUsingDirectiveComponent;
  let fixture: ComponentFixture<TabSetUsingDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSetUsingDirectiveComponent],
      imports: [UiModelModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetUsingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
