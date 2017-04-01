import { UiModelAngularShowcasePage } from './app.po';

describe('ui-model App', function() {
  let page: UiModelAngularShowcasePage;

  beforeEach(() => {
    page = new UiModelAngularShowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
