import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { TreeComponent } from './tree.component';

describe('showcase > ShowcaseTreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeComponent],
      imports: [UiModelBootstrapModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
