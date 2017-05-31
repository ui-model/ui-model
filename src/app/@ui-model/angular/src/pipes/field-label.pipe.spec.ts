import { FieldLabelPipe } from './field-label.pipe';
import { NameMapper } from '../services/name-mapper.service';

describe('FieldLabelPipe', () => {
  it('create an instance', () => {
    const mapper = new NameMapper();
    const pipe = new FieldLabelPipe(mapper);
    expect(pipe).toBeTruthy();
  });
});
