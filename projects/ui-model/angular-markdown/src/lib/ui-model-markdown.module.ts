import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    HighlightPipe,
    MarkdownPipe,
  ],
})
export class UiModelMarkdownModule {
}

export * from './pipes/highlight.pipe';
export * from './pipes/markdown.pipe';
