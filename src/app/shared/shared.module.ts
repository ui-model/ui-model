import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectDirective} from './directives/select.directive';
import {MultiSelectDirective} from './directives/multi-select.directive';
import {ToggleDirective} from './directives/toggle.directive';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import {PanelComponent} from './panel/panel.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    RadioGroupComponent,
    PanelComponent,
    ModalComponent,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    RadioGroupComponent,
    PanelComponent,
    ModalComponent,
  ],
})
export class SharedModule {
}
