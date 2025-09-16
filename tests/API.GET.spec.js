import {test, expect} from '@playwright/test'
import { request } from 'http'

test ('get all employees', async ({request}) => {

await request.get ("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

const headers = {
"cookie" :"orangehrm=lsnt2rt0t1trlmt0n84fnp1t3i",
"host":"opensource-demo.orangehrmlive.com",
"referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
}

const Getresponce = await request.get("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",{headers})

expect (Getresponce.status()).toBe (200)

const jsonformat = await Getresponce.json()

console.log(jsonformat)
})