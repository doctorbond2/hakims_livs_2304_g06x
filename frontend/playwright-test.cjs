const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
        dir: 'videos'
    }
  });
  const page = await context.newPage();
  await page.goto('https://www.hemkop.se/');
  await page.getByRole('button', { name: 'Acceptera cookies' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Acceptera cookies' }).click();
  await page.getByLabel('select-delivery-option').click();
  await page.getByTestId('pick-up-tab').click();
  await page.getByTestId('round-icon-button').click();
  await page.getByLabel('Recept').click();
  await page.getByPlaceholder('Sök recept').click();
  await page.getByText('Köpklara recept').click();

  // ---------------------
  await context.close();
  await browser.close();
})();