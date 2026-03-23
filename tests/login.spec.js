import { test, expect } from '@fixtures/myFixtures';
import loginData from '@data/loginData.json' assert { type: 'json' };

test.describe('Login Tests', () => {
   
    test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

for (const user of loginData) {
test(`Login test for ${user.username}`, async({loginPage})=>{
await loginPage.login(user.username,user.password);

if(user.expected === "success"){
const title = await loginPage.getTitle();
expect(title).toBe('Swag Labs');
}
else{
const errorMessage = await loginPage.getErrorMessage();
expect(errorMessage).toContain("Epic sadface: Sorry, this user has been locked out.");
    }
});
}
});
