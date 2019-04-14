import { NoQuotemarkPipe } from './no-quotemark.pipe';

describe('NoQuotemarkPipe', () => {
  it('create an instance', () => {
    const pipe = new NoQuotemarkPipe();
    expect(pipe).toBeTruthy();
  });
});
