import { AppPage } from './app.po';

describe('piao-nan App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display name of this app as Chatting APP", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Chatting APP");
  });
});
