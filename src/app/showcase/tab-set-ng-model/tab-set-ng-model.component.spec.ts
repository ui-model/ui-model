import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';

import { TabSetNgModelComponent } from './tab-set-ng-model.component';

describe('showcase > ShowcaseTabSetUsingDirectiveComponent', () => {
  let component: TabSetNgModelComponent;
  let fixture: ComponentFixture<TabSetNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSetNgModelComponent],
      imports: [UiModelModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
