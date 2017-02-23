import { AngPruebaPage } from './app.po';

describe('ang-prueba App', () => {
  let page: AngPruebaPage;

  beforeEach(() => {
    page = new AngPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
