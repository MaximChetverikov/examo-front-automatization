import playwright from 'playwright';
import { AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60000);

export let browser;

BeforeAll(async function () {
  global.browser = await playwright.chromium.launch({ headless: false });
});

Before(async function () {
  global.page = await global.browser.newPage();
});

AfterAll(async function () {
  await global.browser.close();
});
