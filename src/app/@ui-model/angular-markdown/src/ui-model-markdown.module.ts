import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from '@ui-model/angular';
import { HighlightPipe } from './pipes/highlight.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HighlightPipe,
    MarkdownPipe,
  ],
  exports: [
    UiModelModule,
    HighlightPipe,
    MarkdownPipe,
  ],
})
export class UiModelMarkdownModule {
}
