import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEditorComponent } from './gender-editor.component';

describe('GenderEditorComponent', () => {
  let component: GenderEditorComponent;
  let fixture: ComponentFixture<GenderEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderEditorComponent ]
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
