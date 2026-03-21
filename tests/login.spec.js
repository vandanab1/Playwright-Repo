const { test, expect } = require('@fixtures/myFixtures');
const loginData = require('@data/loginData.json');

for (const user of loginData) {
test(`Login test for ${user.username}`, async({loginPage})=>{
await loginPage.goto();
await loginPage.login(user.username,user.password);

if(user.expected === "success"){
const title = await loginPage.getTitle();
expect(title).toBe('Swag Labs');
}
else{
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Username and password do not match'); 
    }
})
}
