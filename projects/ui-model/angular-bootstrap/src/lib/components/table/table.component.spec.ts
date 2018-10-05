/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { UiModelModule } from '@ui-model/angular';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, PaginationComponent],
      imports: [UiModelModule, FormsModule],
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
