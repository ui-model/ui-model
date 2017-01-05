import { UiModelAngularPage } from './app.po';

describe('ui-model-angular App', function() {
  let page: UiModelAngularPage;

  beforeEach(() => {
    page = new UiModelAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
