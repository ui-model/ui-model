import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectDirective} from './select.directive';
import {MultiSelectDirective} from './multi-select.directive';
import {ToggleDirective} from './toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective
  ],
})
export class SharedModule {
}
