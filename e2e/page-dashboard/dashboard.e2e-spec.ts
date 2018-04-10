import { browser, by, element } from 'protractor';
import { DashboardPage } from './dashboard.po';
import { AppPage } from '../app.po';

describe('Dashboard Page', () => {
  let page: DashboardPage;
  let appPage: AppPage;

  beforeEach(() => {
    page = new DashboardPage();
    appPage = new AppPage();
  });

});
