import { HelloPage } from './app.po';

describe('hello App', () => {
  let page: HelloPage;

  beforeEach(() => {
    page = new HelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
