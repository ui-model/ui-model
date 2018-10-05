import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GeoBoxDirective } from './directives/geo-box.directive';
import { GeoGpsDirective } from './directives/geo-gps.directive';
import { GeoLineDirective } from './directives/geo-line.directive';
import { GeoPathDirective } from './directives/geo-path.directive';
import { D3ColorsPipe } from './pipes/d3-colors.pipe';
import { GeoProjectionService } from './services/geo-projection.service';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiModelD3Module,
      providers: [GeoProjectionService],
    };
  }

  static forFeature(): ModuleWithProviders {
    return {
      ngModule: UiModelD3Module,
    };
  }
}

export * from './pipes/d3-colors.pipe';

export * from './directives/geo-box.directive';
export * from './directives/geo-gps.directive';
export * from './directives/geo-line.directive';
export * from './directives/geo-path.directive';

export * from './services/geo-projection.service';
