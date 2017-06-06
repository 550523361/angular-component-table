import { AngularComponentTablePage } from './app.po';

describe('angular-component-table App', () => {
  let page: AngularComponentTablePage;

  beforeEach(() => {
    page = new AngularComponentTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
