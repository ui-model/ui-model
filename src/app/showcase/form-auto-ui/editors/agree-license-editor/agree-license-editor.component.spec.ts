import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeLicenseEditorComponent } from './agree-license-editor.component';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FieldMetadataDirective } from '@ui-model/angular';

describe('AgreeLicenseEditorComponent', () => {
  let component: AgreeLicenseEditorComponent;
  let fixture: ComponentFixture<AgreeLicenseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AgreeLicenseEditorComponent],
      providers: [
        {provide: FormGroupDirective, useValue: {control: new FormGroup({fieldName: new FormControl()})}},
        {provide: FieldMetadataDirective, useValue: {meta: {name: 'fieldName'}}},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeLicenseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
