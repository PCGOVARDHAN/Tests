import {test, expect} from '@playwright/test';
test("flipKart challenge", async({page})=>{

await page.goto('https://www.flipkart.com/')
await page.locator('input[type="text"]').fill("iphone 16")
await page.locator("(//span[text()='iphone 16'])[7]").click()
await expect(page.locator("//span[text()='Filters']")).toBeVisible()
const flipfilt = await page.locator("//span[text()='Filters']").textContent()
await page.waitForTimeout(3000)
console.log(flipfilt)
});