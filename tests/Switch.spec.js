import{ test, expect } from '@playwright/test';

test ('Based on browserName run diffrent script', async ({page, browserName }) => {

switch (browserName) {
  case 'chromium':

    await page.goto('https://www.flipkart.com/');
    break;

    case 'Firefox':
        await page.goto('https://www.naukri.com/');
        break;

    case "webkit":
        await page.goto('https://www.myntra.com/');
        break;

        default:

        console.log('unknowbrowser');

}

})

