import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { HighlightPipe } from './pipes/highlight.pipe';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownPipe, HighlightPipe, MarkdownViewerComponent, FieldErrorComponent],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    MarkdownPipe,
    HighlightPipe,
    MarkdownViewerComponent,
    FieldErrorComponent,
  ],
})
export class SharedModule {
}
