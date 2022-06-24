import { When, setDefaultTimeout, Then } from '@cucumber/cucumber';
//import { expect } from 'chai';
import playwright from 'playwright';

let browser;

When('User opens Practice webpage', async function () {
  setDefaultTimeout(60000);
  browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://dev.examo.quantori.com/practice');
});

Then('User should see Submit button', async function () {
  console.log('Then');
  await browser.close();
});
