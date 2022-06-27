const { Before, When, Then, After } = require('@cucumber/cucumber'); // eslint-disable-line
const { expect } = require('chai'); // eslint-disable-line
const playwright = require('playwright'); // eslint-disable-line
const { setDefaultTimeout } = require('@cucumber/cucumber'); // eslint-disable-line
setDefaultTimeout(60000);

let browser;
let page;

Before(async function () {
  browser = await playwright.chromium.launch({ headless: false });
  page = await browser.newPage();
});

When('User opens Examo webpage', async function () {
  await page.goto('https://dev.examo.quantori.com/');
});

Then('User should see Examo Logo', async function () {
  //Getting
  const expectedText = 'EXAMO';
  const textFromLocator = await page
    //
    .locator('#__next > div > div > div.css-1781tq6 > div.css-542oke > div.css-j7qwjs > h1')
    .allTextContents();

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});

After(async function () {
  await browser.close();
});
