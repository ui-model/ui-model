import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AgreeLicenseEditorComponent } from './agree-license-editor.component';

describe('showcase > ShowcaseAgreeLicenseEditorComponent', () => {
  let component: AgreeLicenseEditorComponent;
  let fixture: ComponentFixture<AgreeLicenseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AgreeLicenseEditorComponent],
      providers: [
        {provide: ControlContainer, useValue: {control: new FormGroup({fieldName: new FormControl()})}},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeLicenseEditorComponent);
    component = fixture.componentInstance;
    component.name = 'fieldName';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
