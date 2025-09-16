import { test, expect } from '@playwright/test';

import logindata from "../TestData/login.json"

test('Add Job Title', async ({ page }) => {

    await page.goto('/web/index.php/auth/login');

    await page.locator('//input[@placeholder="Username"]').fill(logindata.username)

    await page.locator('//input[@placeholder="Password"]').fill(logindata.Password)

    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    await expect(page).toHaveURL("/web/index.php/dashboard/index")

    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()

    await expect(page).toHaveURL("/web/index.php/admin/viewSystemUsers")

    await page.locator("//span[text()='Job ']").click()

    await page.locator("//a[text()='Job Titles']").click()

    await expect(page).toHaveURL("/index.php/admin/viewJobTitleList")   

    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    await page.locator('//input[@class="oxd-input oxd-input--active"])[2]').fill("Software Engineer")

    await page.locator('//button[@type="submit"]').click()

    await expect(page).toHaveURL("/web/index.php/admin/viewJobTitleList")



})