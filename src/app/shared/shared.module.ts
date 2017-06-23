import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelMarkdownModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownViewerComponent, JsonViewerComponent],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    UiModelMarkdownModule,
    MarkdownViewerComponent,
    JsonViewerComponent,
  ],
})
export class SharedModule {
}
