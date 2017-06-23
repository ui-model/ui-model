import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';

describe('ShowcaseTableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [UiModelBootstrapModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
