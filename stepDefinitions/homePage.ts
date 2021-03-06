import config from '../configs/run_env.json';
import { HomePage } from '../pageObjects/home';
import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

When('User opens Examo webpage', async function () {
  await global.page.goto(config.url);
});

Then('User should see Examo Logo', async function () {
  //Getting
  const expectedText = 'EXAMO';
  const textFromLocator = await HomePage.getExamoText(global.page);

  //Checking
  expect(textFromLocator[0]).to.be.equal(expectedText);
});
