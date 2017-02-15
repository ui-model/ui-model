import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UiModelModule} from "ui-model-angular";
import {UiModelBootstrapModule} from "ui-model-angular-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelBootstrapModule,
  ],
  declarations: [
  ],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
  ],
})
export class SharedModule {
}
