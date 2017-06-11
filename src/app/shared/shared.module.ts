import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelMarkdownModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownViewerComponent],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    UiModelMarkdownModule,
    MarkdownViewerComponent,
  ],
})
export class SharedModule {
}
