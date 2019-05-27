import { FieldErrorMapper } from '../services/field-error-mapper.service';
import { FieldErrorMapperPipe } from './field-error-mapper.pipe';

describe('FieldErrorMapperPipe', () => {
  it('create an instance', () => {
    const formatter = new FieldErrorMapper();
    const pipe = new FieldErrorMapperPipe(formatter);
    expect(pipe).toBeTruthy();
  });
});
