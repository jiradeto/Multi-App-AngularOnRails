import { GoodbyePage } from './app.po';

describe('goodbye App', () => {
  let page: GoodbyePage;

  beforeEach(() => {
    page = new GoodbyePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
