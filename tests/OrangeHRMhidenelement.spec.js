import {test, expect} from '@playwright/test'

import logindata from "../TestData/login.json"

test('verifying hidden element', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.locator("//input[@placeholder='Username']").fill(logindata.username)

await page.locator("//input[@placeholder='Password']").fill(logindata.Password)

await page.locator('//button[@type="submit"]').click()

await expect(page).toHaveURL("/web/index.php/dashboard/index")

await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()

await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

//await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")

await page.locator('//input[@name="firstName"]').fill("Gova")

await page.locator('//input[@name="lastName"]').fill("vardhan")

await page.locator('//button[@type="submit"]').click()

//await expect(page.locator('[class="oxd-toast oxd-toast--success oxd-toast-container--toast"]')).toBeDisabled()
await expect(page.locator('.oxd-toast.oxd-toast--success.oxd-toast-container--toast')).toBeVisible();

//const success = await page.locator('[class="oxd-toast-content oxd-toast-content--success"]').textContent()
const success = await page.locator('.oxd-toast-content.oxd-toast-content--success').textContent();

//await page.waitForTimeout(3000)

console.log(success)

await page.close()


})
