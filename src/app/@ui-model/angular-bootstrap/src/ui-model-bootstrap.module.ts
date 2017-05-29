import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PanelComponent } from './components/panel/panel.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { TableComponent } from './components/table/table.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    TooltipComponent,
    FieldErrorComponent,
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
    TooltipComponent,
    FieldErrorComponent,
  ],
})
export class UiModelBootstrapModule {
}

export * from './components/modal/modal.component';
export * from './components/pagination/pagination.component';
export * from './components/panel/panel.component';
export * from './components/radio-group/radio-group.component';
export * from './components/table/table.component';
export * from './components/tree-node/tree-node.component';
export * from './components/calendar/calendar.component';
export * from './components/type-ahead/type-ahead.component';
export * from './components/tooltip/tooltip.component';
