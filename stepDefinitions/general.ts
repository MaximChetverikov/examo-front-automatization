import playwright from 'playwright';
import { AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60000);

export let browser;

BeforeAll(async function () {
  global.browser = await playwright.chromium.launch({ headless: false });
});

AfterAll(async function () {
  await global.browser.close();
});
