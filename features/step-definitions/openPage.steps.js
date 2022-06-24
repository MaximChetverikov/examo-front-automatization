const { Before, When, Then, After } = require('@cucumber/cucumber');
const playwright = require('playwright');
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const { expect } = require('chai');

var browser;
var page;

Before(async function () {
  browser = await playwright.chromium.launch({ headless: false });
  page = await browser.newPage();
});

When('User opens Examo webpage', async function () {
  await page.goto('https://dev.examo.quantori.com/');
});

Then('User should see Examo Logo', async function () {
  const expectedText = 'EXAMO';
  const textFromLocator = await page
    .locator('#__next > div > div > div.css-1781tq6 > div.css-542oke > div.css-j7qwjs > h1')
    .allTextContents();

  console.log('TEXT FROM SELECTOR: ', textFromLocator[0]);
  expect(textFromLocator[0]).to.be.equal(expectedText);
});

After(async function () {
  await browser.close();
});
