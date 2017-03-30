import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownPipe} from './pipes/markdown.pipe';
import {UiModelModule} from '@ui-model/angular';
import {UiModelBootstrapModule} from '@ui-model/angular-bootstrap';
import {HighlightPipe} from './pipes/highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownPipe, HighlightPipe],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    MarkdownPipe,
    HighlightPipe,
  ],
})
export class SharedModule {
}
