import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectNgModelComponent } from './multi-select-ng-model.component';
import { UiModelModule } from '@ui-model/angular';
import { FormsModule } from '@angular/forms';

describe('MultiSelectNgModelComponent', () => {
  let component: MultiSelectNgModelComponent;
  let fixture: ComponentFixture<MultiSelectNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectNgModelComponent],
      imports: [UiModelModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
