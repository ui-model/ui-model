import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectNgModelComponent} from './select-ng-model.component';
import {UiModelModule} from '@ui-model/angular';
import {FormsModule} from '@angular/forms';

describe('SelectNgModelComponent', () => {
  let component: SelectNgModelComponent;
  let fixture: ComponentFixture<SelectNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectNgModelComponent],
      imports: [UiModelModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
