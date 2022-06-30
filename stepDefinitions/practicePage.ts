import { url } from '../configs/run_env.json';
import { Before, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Before(async function () {
  global.page = await global.browser.newPage();
});

When('User opens Practice webpage', async function () {
  await global.page.goto(url + 'practice');
});

Then('User should see Submit button', async function () {
  //Getting
  const expectedText = 'Submit';
  const textFromLocator = await global.page.locator('.css-vinns1 h6').allTextContents();

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});
