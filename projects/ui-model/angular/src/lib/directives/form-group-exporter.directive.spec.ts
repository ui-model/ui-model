import { FormGroupDirective, FormGroupName } from '@angular/forms';
import { FormGroupExporterDirective } from './form-group-exporter.directive';

describe('FormGroupDirective', () => {
  it('should create an instance', () => {
    const container = new FormGroupDirective([], []);
    const name = new FormGroupName(container, [], []);
    const directive = new FormGroupExporterDirective(name);
    expect(directive).toBeTruthy();
  });
});
