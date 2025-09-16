import {expect, test} from "@playwright/test"

test ("verify list of users API", async ({request}) => {

const getallusers = await request.get ("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2025-08-31&currentTime=08:06")

console.log(getallusers)


})