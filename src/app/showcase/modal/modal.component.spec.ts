/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { ModalService } from '@ui-model/angular';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent, ModalContentComponent],
      imports: [UiModelBootstrapModule],
      providers: [ModalService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
