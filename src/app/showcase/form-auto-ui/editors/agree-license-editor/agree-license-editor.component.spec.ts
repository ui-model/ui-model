import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeLicenseEditorComponent } from './agree-license-editor.component';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('ShowcaseAgreeLicenseEditorComponent', () => {
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
