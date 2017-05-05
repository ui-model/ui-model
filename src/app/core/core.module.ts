import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceCodeService } from './source-code.service';
import { HttpModule } from '@angular/http';
import { UpdateTitleGuard } from './update-title.service';
import { UpdateMetadataGuard } from './update-metadata-guard.service';
import { MetadataService } from './metadata.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [SourceCodeService, UpdateTitleGuard, UpdateMetadataGuard, MetadataService],
})
export class CoreModule {
}
