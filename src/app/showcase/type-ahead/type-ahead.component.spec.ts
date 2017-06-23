import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeAheadComponent } from './type-ahead.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseTypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAheadComponent],
      imports: [UiModelBootstrapModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
