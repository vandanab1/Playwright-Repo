//const {test, expect}= require('@playwright/test');
const { test, expect } = require('@fixtures/myFixtures');
//const { LoginPage} = require('@pages/login.page');
//const { ProductPage } = require('@pages/product.page');

test('Valid login', async({loginPage})=>{
await loginPage.goto();
await loginPage.login("standard_user","secret_sauce");
const title = await loginPage.getTitle();
expect(title).toBe('Swag Labs');
})
