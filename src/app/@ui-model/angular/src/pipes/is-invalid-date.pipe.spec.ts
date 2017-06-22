import { IsInvalidDatePipe } from './is-invalid-date.pipe';

describe('IsInvalidDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsInvalidDatePipe();
    expect(pipe).toBeTruthy();
  });
});
