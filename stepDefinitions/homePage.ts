import config from '../configs/run_env.json';
import { When, Then, Before } from '@cucumber/cucumber';
import { expect } from 'chai';

Before(async function () {
  global.page = await global.browser.newPage();
});

When('User opens Examo webpage', async function () {
  await global.page.goto(config.url);
});

Then('User should see Examo Logo', async function () {
  //Getting
  const expectedText = 'EXAMO';
  const textFromLocator = await global.page.locator('.css-j7qwjs h1').allTextContents();

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});
