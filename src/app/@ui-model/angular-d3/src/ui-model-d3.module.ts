import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3ColorsPipe } from './pipes/d3-colors.pipe';
import { GeoBoxDirective } from './directives/geo-box.directive';
import { GeoGpsDirective } from './directives/geo-gps.directive';
import { GeoLineDirective } from './directives/geo-line.directive';
import { GeoPathDirective } from './directives/geo-path.directive';
import { GeoProjectionService } from './directives/geo-projection.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    D3ColorsPipe,
    GeoBoxDirective,
    GeoGpsDirective,
    GeoLineDirective,
    GeoPathDirective,
  ],
  exports: [
    D3ColorsPipe,
    GeoBoxDirective,
    GeoGpsDirective,
    GeoLineDirective,
    GeoPathDirective,
  ],
})
export class UiModelD3Module {
}

export * from './pipes/d3-colors.pipe';
export * from './directives/geo-box.directive';
export * from './directives/geo-gps.directive';
export * from './directives/geo-line.directive';
export * from './directives/geo-path.directive';
export * from './directives/geo-projection.service';

export const ALL_SERVICES_OF_UI_MODEL_D3 = [GeoProjectionService];
