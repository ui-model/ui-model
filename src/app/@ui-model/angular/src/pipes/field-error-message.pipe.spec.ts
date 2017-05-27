import { FieldErrorMessagePipe } from './field-error-message.pipe';
import { FieldErrorFormatter } from '../services/field-error-formatter.service';

describe('FieldErrorMessagePipe', () => {
  it('create an instance', () => {
    const formatter = new FieldErrorFormatter();
    const pipe = new FieldErrorMessagePipe(formatter);
    expect(pipe).toBeTruthy();
  });
});
