import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiModelModule} from 'ui-model-angular';
import {UiModelBootstrapModule} from 'ui-model-angular-bootstrap';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownPipe],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    MarkdownPipe,
  ],
})
export class SharedModule {
}
