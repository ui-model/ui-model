import { IsEmptyPipe } from './is-empty.pipe';

describe('IsEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new IsEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
