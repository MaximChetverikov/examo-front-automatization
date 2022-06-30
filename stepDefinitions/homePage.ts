import config from '../configs/run_env.json';
import { When, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import playwright from 'playwright';
//import { page, browser } from './generalSteps';
setDefaultTimeout(60000);

let browser;
let page;

Before(async function () {
  browser = await playwright.chromium.launch({ headless: false });
  page = await browser.newPage();
});

When('User opens Examo webpage', async function () {
  await page.goto(config.url);
});

Then('User should see Examo Logo', async function () {
  //Getting
  const expectedText = 'EXAMO';
  const textFromLocator = await page.locator('.css-j7qwjs h1').allTextContents();

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});

After(async function () {
  await browser.close();
});
