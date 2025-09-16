import { test, expect } from '@playwright/test'

test("work with conditionalstatemnts", async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium":

            await page.goto("https://www.flipkart.com/")
            await page.close()

            break;

        case "firefox":

            await page.goto("https://www.amazon.com/")
            await page.close()

            break;

        case "webkit":

            await page.goto("https://www.myntra.com/")
            await page.close()

    }
})

