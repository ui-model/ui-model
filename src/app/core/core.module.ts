import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserApi } from './apis/user-api.service';
import { MetadataService } from './metadata.service';
import { SourceCodeService } from './source-code.service';
import { UpdateMetadataGuard } from './update-metadata-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    SourceCodeService,
    UpdateMetadataGuard,
    MetadataService,
    UserApi,
  ],
})
export class CoreModule {
}
