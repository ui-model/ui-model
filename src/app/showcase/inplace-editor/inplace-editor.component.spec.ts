import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InplaceEditorComponent} from './inplace-editor.component';
import {UiModelModule} from '@ui-model/angular';
import {FormsModule} from '@angular/forms';

describe('InplaceEditorComponent', () => {
  let component: InplaceEditorComponent;
  let fixture: ComponentFixture<InplaceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InplaceEditorComponent],
      imports: [UiModelModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InplaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
