import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioGroupComponent } from './radio-group.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseRadioGroupComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioGroupComponent],
      imports: [UiModelBootstrapModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
