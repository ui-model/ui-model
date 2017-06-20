import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceCodeService } from './source-code.service';
import { HttpModule } from '@angular/http';
import { UpdateMetadataGuard } from './update-metadata-guard.service';
import { MetadataService } from './metadata.service';
import { UiModelModule } from '@ui-model/angular';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbService } from './mock/mock-db.service';
import { UserApi } from './apis/user-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockDbService, {passThruUnknownUrl: true}),
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
