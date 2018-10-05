import { D3ColorsPipe } from './d3-colors.pipe';

describe('D3ColorsPipe', () => {
  it('create an instance', () => {
    const pipe = new D3ColorsPipe();
    expect(pipe).toBeTruthy();
  });
});
