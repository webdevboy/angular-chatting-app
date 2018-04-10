import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/login');
  }

  getDashboardTitle() {
    return element(by.css('h2')).getText();
	}
}
