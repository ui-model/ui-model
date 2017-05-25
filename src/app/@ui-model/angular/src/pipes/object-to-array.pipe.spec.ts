import { ObjectToArrayPipe } from './object-to-array.pipe';

describe('ObjectToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjectToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
