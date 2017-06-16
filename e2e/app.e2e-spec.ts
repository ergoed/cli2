import { Cli2Page } from './app.po';

describe('cli2 App', () => {
  let page: Cli2Page;

  beforeEach(() => {
    page = new Cli2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
