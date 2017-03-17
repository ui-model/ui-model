import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SourceCodeService} from './source-code.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [SourceCodeService]
})
export class CoreModule {
}
