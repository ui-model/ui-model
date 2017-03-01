import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UiModelModule} from 'ui-model-angular';
import {ModalComponent} from './components/modal/modal.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {PanelComponent} from './components/panel/panel.component';
import {RadioGroupComponent} from './components/radio-group/radio-group.component';
import {TableComponent} from './components/table/table.component';
import {TreeNodeComponent} from './components/tree-node/tree-node.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModelModule,
  ],
  declarations: [
    ModalComponent,
    PaginationComponent,
    PanelComponent,
    RadioGroupComponent,
    TableComponent,
    TreeNodeComponent,
    CalendarComponent,
    TypeAheadComponent,
  ],
  exports: [
    UiModelModule,
    ModalComponent,
    PaginationComponent,
    PanelComponent,
    RadioGroupComponent,
    TableComponent,
    TreeNodeComponent,
    CalendarComponent,
    TypeAheadComponent,
  ],
})
export class UiModelBootstrapModule {
}

export * from './components/modal';
export * from './components/pagination';
export * from './components/panel';
export * from './components/radio-group';
export * from './components/table';
export * from './components/tree-node';
export * from './components/calendar';
