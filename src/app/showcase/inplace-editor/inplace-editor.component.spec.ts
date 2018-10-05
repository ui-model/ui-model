import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';

import { InplaceEditorComponent } from './inplace-editor.component';

describe('showcase > ShowcaseInplaceEditorComponent', () => {
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
