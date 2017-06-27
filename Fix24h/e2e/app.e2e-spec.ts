import { Fix24hPage } from './app.po';

describe('fix24h App', () => {
  let page: Fix24hPage;

  beforeEach(() => {
    page = new Fix24hPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
