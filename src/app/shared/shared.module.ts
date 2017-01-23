import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from 'ui-model-angular';
import { ModalComponent } from './components/modal/modal.component';
import { PanelComponent } from './components/panel/panel.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
  ],
  declarations: [
    ModalComponent,
    PanelComponent,
    RadioGroupComponent,
  ],
  exports: [
    UiModelModule,
    ModalComponent,
    PanelComponent,
    RadioGroupComponent,
  ],
})
export class SharedModule {
}
