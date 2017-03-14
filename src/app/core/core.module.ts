import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaService} from './meta.service';
import {ChildrenGuardService} from './children-guard.service';
import {SourceCodeService} from './source-code.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [MetaService, ChildrenGuardService, SourceCodeService]
})
export class CoreModule {
}
