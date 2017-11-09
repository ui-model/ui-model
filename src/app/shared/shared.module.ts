import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    UiModelModule.forFeature(),
    UiModelMarkdownModule,
    UiModelBootstrapModule,
  ],
  declarations: [MarkdownViewerComponent, JsonViewerComponent],
  exports: [
    MarkdownViewerComponent,
    JsonViewerComponent,
  ],
})
export class SharedModule {
}
