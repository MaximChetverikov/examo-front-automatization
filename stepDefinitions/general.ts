import playwright from 'playwright';
import { Before } from '@cucumber/cucumber';

export let browser;
export let page;

Before(async function () {
  browser = await playwright.chromium.launch({ headless: false });
  page = await browser.newPage();
});
