import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCheckboxComponent } from './multi-select-checkbox.component';
import { UiModelModule } from '@ui-model/angular';
import { FormsModule } from '@angular/forms';

describe('ShowcaseMultiSelectCheckboxComponent', () => {
  let component: MultiSelectCheckboxComponent;
  let fixture: ComponentFixture<MultiSelectCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectCheckboxComponent],
      imports: [UiModelModule, FormsModule],
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
