import {test, expect} from '@playwright/test'

test('Adding employee', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.locator("//input[@placeholder='Username']").fill('admin')

await page.locator("//input[@placeholder='Password']").fill('admin123')

await page.locator('//button[@type="submit"]').click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()

await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

await page.locator('//input[@name="firstName"]').fill("Playwright")

await page.locator('//input[@name="lastName"]').fill("JS")

await page.locator('//button[@type="submit"]').click()

await page.close()

})