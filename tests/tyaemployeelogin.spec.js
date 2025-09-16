import {test, expect} from '@playwright/test'

test('login as employee', async ({ page }) => {

    await page.goto('https://qa.intelaccounts.in/#/login')

    await page.locator('//input[@placeholder="Email"]').fill('sharathssc@outlook.com')

    await page.locator('//input[@placeholder="Password"]').fill('Aa@123')

    await page.locator('[for="rememberMe"]').check()
    
    await page.locator('//button[@class="ng-star-inserted"]').click()

    await expect(page).toHaveURL('https://qa.intelaccounts.in/#/my-companies')

    await page.locator('[class="dashboard-heading heading-color logo ng-star-inserted"]').nth(3).click()

    await expect(page).toHaveURL('https://qa.intelaccounts.in/#/dashboard')

    await page.locator('(//input[@type="text"])[1]').pressSequentially('employee',{delay:1000})

    await page.waitForTimeout(1000)

    await page.getByText('Employee Master', { exact: true }).click();

    await expect(page).toHaveURL('https://qa.intelaccounts.in/master/#/employees')

    await page.waitForTimeout(1000)

    await page.locator('[class="fa fa-plus my-float"]').click()

    await page.fill('#first_name', 'sharath')

    await page.fill('#email', 'sharathkumar.s@gmail.com')

    await page.fill('#mobile', '9876543215')

    await page.waitForTimeout(1000)

    await page.locator('(//div[@class="md2-select-trigger"])[2]').click()   
    await page.locator('md2-option[ng-reflect-value="Male"]').click()

    await page.locator('(//span[@class="dropdown-btn"])[1]').click()
    await page.locator('(//li[@class="multiselect-item-checkbox ng-star-inserted"])[4]').click()

    await page.locator('(//div[@class="md2-select-trigger"])[8]').click()
    await page.locator('//md2-option[text()="Rupees(INR)"]').click()

    //await page.locator('//label[text()="Department"]/following::div[@role="option"][1]').click();


    await page.locator('(//div[@class="md2-select-trigger"])[3]').click()
    await page.locator('//md2-option[text()="(-_-)"]').click()

    

    await page.waitForTimeout(3000)
    await page.fill('#password', 'Aaaa@123')
})