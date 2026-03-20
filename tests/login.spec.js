const { test, expect } = require('@fixtures/myFixtures');
test('Valid login', async({loginPage})=>{
await loginPage.goto();
await loginPage.login("standard_user","secret_sauce");
const title = await loginPage.getTitle();
expect(title).toBe('Swag Labs');
})
