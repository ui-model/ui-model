import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SourceCodeService} from './source-code.service';
import {HttpModule} from '@angular/http';
import {UpdateTitleGuard} from './update-title.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [SourceCodeService, UpdateTitleGuard]
})
export class CoreModule {
}
