import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';

import { MultiSelectCheckboxComponent } from './multi-select-checkbox.component';

describe('ShowcaseMultiSelectCheckboxComponent', () => {
  let component: MultiSelectCheckboxComponent;
  let fixture: ComponentFixture<MultiSelectCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectCheckboxComponent],
      imports: [UiModelModule.forRoot(), FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
