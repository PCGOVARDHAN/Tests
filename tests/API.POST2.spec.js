import {test, expect} from '@playwright/test'

test("create user",async({request})=>{
    const url="https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const headers={
        "cookie" :"orangehrm=lsnt2rt0t1trlmt0n84fnp1t3i",
        "host":"opensource-demo.orangehrmlive.com",
        "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    }
    const payload={
      "firstName": "anil1",
      //"middleName": "",
      "lastName": "anil1231",
      //"empPicture": null,
      "employeeId": "045411"
    }
    
    const createUser = await request.post(url,{headers,data:payload})
     expect(createUser.status()).toBe(200)
    const response= await createUser.json()
    console.log(response)
})
