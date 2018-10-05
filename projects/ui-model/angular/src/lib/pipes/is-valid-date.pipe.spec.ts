import { IsValidDatePipe } from './is-valid-date.pipe';

describe('IsValidDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsValidDatePipe();
    expect(pipe).toBeTruthy();
  });
});
