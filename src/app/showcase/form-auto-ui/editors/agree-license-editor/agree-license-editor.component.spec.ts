import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeLicenseEditorComponent } from './agree-license-editor.component';

describe('AgreeLicenseEditorComponent', () => {
  let component: AgreeLicenseEditorComponent;
  let fixture: ComponentFixture<AgreeLicenseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreeLicenseEditorComponent ]
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
