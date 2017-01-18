import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectDirective} from './directives/select.directive';
import {MultiSelectDirective} from './directives/multi-select.directive';
import {ToggleDirective} from './directives/toggle.directive';
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { ViewportDirective } from './directives/viewport.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    ClickOutsideDirective,
    ViewportDirective,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    ClickOutsideDirective,
    ViewportDirective,
  ],
})
export class UiModelModule {
}

export * from './directives/toggle.directive';
export * from './directives/select.directive';
export * from './directives/multi-select.directive';
export * from './directives/viewport.directive';

export * from './directives/click-outside.directive';
