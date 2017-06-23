import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEditorComponent } from './gender-editor.component';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FieldMetadataDirective } from '@ui-model/angular';
import { RadioGroupComponent } from '@ui-model/angular-bootstrap';

describe('ShowcaseGenderEditorComponent', () => {
  let component: GenderEditorComponent;
  let fixture: ComponentFixture<GenderEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [GenderEditorComponent, RadioGroupComponent],
      providers: [
        {provide: FormGroupDirective, useValue: {control: new FormGroup({fieldName: new FormControl()})}},
        {provide: FieldMetadataDirective, useValue: {meta: {name: 'fieldName'}}},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
