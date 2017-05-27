import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceCodeService } from './source-code.service';
import { HttpModule } from '@angular/http';
import { UpdateTitleGuard } from './update-title.service';
import { UpdateMetadataGuard } from './update-metadata-guard.service';
import { MetadataService } from './metadata.service';
import { FieldErrorFormatter, FormModelBuilder, ModalService, TooltipService } from '@ui-model/angular';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [
    SourceCodeService,
    UpdateTitleGuard,
    UpdateMetadataGuard,
    MetadataService,
    FormModelBuilder,
    ModalService,
    TooltipService,
    FieldErrorFormatter,
  ],
})
export class CoreModule {
}
