/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModalComponent } from './global-modal.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { ModalService } from '@ui-model/angular';

describe('GlobalModalComponent', () => {
  let component: GlobalModalComponent;
  let fixture: ComponentFixture<GlobalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalModalComponent],
      imports: [UiModelBootstrapModule],
      providers: [ModalService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
