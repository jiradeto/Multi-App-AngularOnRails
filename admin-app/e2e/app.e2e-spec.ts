import { CatPage } from './app.po';

describe('cat App', () => {
  let page: CatPage;

  beforeEach(() => {
    page = new CatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
