import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModelModule } from '@ui-model/angular';
import { D3ColorsPipe } from './pipes/d3-colors.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    D3ColorsPipe,
  ],
  exports: [
    UiModelModule,
    D3ColorsPipe,
  ],
})
export class UiModelD3Module {
}

export * from './pipes/d3-colors.pipe';
