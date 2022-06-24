import { Given, When, Then } from 'cucumber';
import { expect } from '@playwright/test';
import { PlaywrightDevPage } from './../stories/playwright-dev-page';

Given('I navigate to {string}', async function() {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    'Installation',
    'First test',
    'Configuration file',
    'Writing assertions',
    'Using test fixtures',
    'Using test hooks',
    'Command line',
    'Configure NPM scripts',
    'Release notes'
  ]);
});

Given('I see Home page', async function () {

});

When('I click on Practice tab', async function () {

});

Then('I see page is open', async function () {

  },
);
