import {test, expect} from '@playwright/test'
test("verify api testing using put Method-update user",async({request})=>{
    const headers={
        "Cookie":"orangehrm=rjklbpgvi155vanor4u2d3ehd6",
        "Host":"opensource-demo.orangehrmlive.com",
        "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/197"
    }
    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/197/personal-details'
   const payload={
  "lastName": "Doe123", "firstName": "John123", "middleName": "Michael", "employeeId": "EPM0003", "otherId": "12345"
      }
   const updatedate=await request.put(url,{headers,data:payload})
   expect(updatedate.status()).toBe(200)
  const response= await  updatedate.json()
  console.log(response)
})