import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService, UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalComponent } from './modal.component';

describe('showcase > ShowcaseModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent, ModalContentComponent],
      imports: [
        UiModelModule.forRoot(),
        UiModelBootstrapModule.forRoot(),
      ],
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
