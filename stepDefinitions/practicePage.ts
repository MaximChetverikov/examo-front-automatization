import { Before, When, setDefaultTimeout, Then, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import playwright from 'playwright';

let browser;
let page;

Before(async function () {
  setDefaultTimeout(60000);
  browser = await playwright.chromium.launch({ headless: false });
  page = await browser.newPage();
});

When('User opens Practice webpage', async function () {
  await page.goto('https://dev.examo.quantori.com/practice');
});

Then('User should see Submit button', async function () {
  //Getting
  const expectedText = 'Submit';
  const textFromLocator = await page
    .locator('#__next > div > div > div.css-1781tq6 > div > div.css-vinns1 > button > h6')
    .allTextContents();

  //Checking
  console.log('name of button:', textFromLocator[0]);
  expect(textFromLocator[0]).to.be.equal(expectedText);
});

After(async function () {
  await browser.close();
});
