/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TypeAheadComponent} from './type-ahead.component';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent<any>;
  let fixture: ComponentFixture<TypeAheadComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAheadComponent]
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
