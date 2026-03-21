const { test, expect } = require('@fixtures/myFixtures');
const loginData = require('@data/loginData.json');

test('Validation product', async({loginPage,productPage})=>{
const validUser = loginData.find(u => u.type === 'valid');
await loginPage.goto();
await loginPage.login(validUser.username, validUser.password);
await expect(productPage.getProduct()).toHaveCount(6);
await expect(productPage.options).toHaveCount(4);
await productPage.dropdown.selectOption({label:'Name (A to Z)'});
});