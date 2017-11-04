import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UiModelModule } from '@ui-model/angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserApi } from './apis/user-api.service';
import { MetadataService } from './metadata.service';
import { MockDbService } from './mock/mock-db.service';
import { SourceCodeService } from './source-code.service';
import { UpdateMetadataGuard } from './update-metadata-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDbService, {passThruUnknownUrl: true}),
  ],
  declarations: [],
  providers: [
    SourceCodeService,
    UpdateMetadataGuard,
    MetadataService,
    UiModelModule.services,
    UserApi,
  ],
})
export class CoreModule {
}
