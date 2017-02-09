import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from 'ui-model-angular';
import { ModalComponent } from './components/modal/modal.component';
import { PanelComponent } from './components/panel/panel.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {TableComponent} from "./components/table/table.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModelModule,
  ],
  declarations: [
    ModalComponent,
    PanelComponent,
    RadioGroupComponent,
    PaginationComponent,
    TableComponent,
  ],
  exports: [
    UiModelModule,
    ModalComponent,
    PanelComponent,
    RadioGroupComponent,
    PaginationComponent,
    TableComponent,
  ],
})
export class SharedModule {
}
