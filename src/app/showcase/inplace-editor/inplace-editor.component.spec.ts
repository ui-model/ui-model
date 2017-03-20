import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InplaceEditorComponent } from './inplace-editor.component';

describe('InplaceEditorComponent', () => {
  let component: InplaceEditorComponent;
  let fixture: ComponentFixture<InplaceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InplaceEditorComponent ]
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
