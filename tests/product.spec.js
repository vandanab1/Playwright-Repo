const { test, expect } = require('@fixtures/myFixtures');
//const loginData = require('@data/loginData.json');

test('Validation product', async({loginPage,productPage})=>{
await loginPage.goto();
await loginPage.login("standard_user","secret_sauce");
await expect(productPage.getProduct()).toHaveCount(6);
await expect(productPage.options).toHaveCount(4);
await productPage.dropdown.selectOption({label:'Name (A to Z)'});
});