/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TypeAheadComponent} from './type-ahead.component';
import {UiModelModule} from '@ui-model/angular';
import {FormsModule} from '@angular/forms';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent<any>;
  let fixture: ComponentFixture<TypeAheadComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAheadComponent],
      imports: [UiModelModule, FormsModule],
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
