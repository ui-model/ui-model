/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormSectionComponent} from './form-section.component';
import {FormsModule, NgModelGroup} from '@angular/forms';

xdescribe('FormSectionComponent', () => {
  let component: FormSectionComponent;
  let fixture: ComponentFixture<FormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSectionComponent],
      imports: [FormsModule],
      providers: [NgModelGroup],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
