import {test, expect} from '@playwright/test'

test ('search through voice', async ({page}) => {


await page.goto("https://www.google.com/")
await page.locator('[class="XDyW0e xZk2S A8MTVd"]').click()







})