import { url } from '../configs/run_env.json';
import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { PracticePage } from '../pageObjects/practice';

When('User opens Practice webpage', async function () {
  await global.page.goto(url + 'practice');
});

Then('User should see Submit button', async function () {
  //Getting
  const expectedText = 'Submit';
  const textFromLocator = await PracticePage.getSubmitButtonText(global.page);

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});
