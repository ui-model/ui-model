import { IsNotEmptyPipe } from './is-not-empty.pipe';

describe('IsNotEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new IsNotEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
