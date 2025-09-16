 import {test, expect} from '@playwright/test'
 test("verify api testing using delete Method ==delete user",async({request})=>{
    const headers={
        "Cookie":"orangehrm=rjklbpgvi155vanor4u2d3ehd6",
        "Host":"opensource-demo.orangehrmlive.com",
        "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    }

const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
const payload={
    "ids": [191]

}

const deleteusre=await request.delete(url,{headers,data:payload})
expect(deleteusre.status()).toBe(200)
})